import { useEffect, useRef, useState } from "react";
import {
  BiChevronDown,
  BiMinus,
  BiPlus,
  BiReset,
  BiSend,
} from "react-icons/bi";
import { BsArrowUpShort, BsQuestion, BsSendArrowUp } from "react-icons/bs";
import { MdCancel, MdChat, MdFormatQuote } from "react-icons/md";
import { SiChatbot, SiHelpdesk } from "react-icons/si";
import axios from "axios";
import { PiFinnTheHuman, PiFinnTheHumanBold } from "react-icons/pi";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Accordion, Button, Input, Text } from "rizzui";
import {
  Disclosure,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
// import { IoChevronDownCircleOutline, IoSend } from "react-icons/io5";
import styles from "./chatbot.module.css";
import { SiChatbot as ChatSolidIcon } from "react-icons/si";

const accordionVariants = {
  open: { height: "auto", opacity: 1 },
  closed: { height: 0, opacity: 0 },
};

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const token = process.env.NEXT_PUBLIC_API_TOKEN;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]); // State for products
  const [selectedOffer, setSelectedOffer] = useState(null); // Track selected offer
  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState({});
  const [getUser, setGetUser] = useState({});
  const chatContainerRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverStates, setHoverStates] = useState({});
  const [showMore, setShowMore] = useState(false);

  // Save messages to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages]);

  // Fetch configuration data (only runs on client side)
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        if (typeof window !== "undefined") {
          const website = window.location.ancestorOrigins[0]?.replace(
            /^https?:\/\//,
            ""
          );

          const response = await axiosInstance.get(
            `/api/users/website/${website}`
          );
          const data = response.data;

          if (data && data.userId) {
            const userId = data.userId;
            const customizeResponse = await axiosInstance.get(
              `/api/customize/${userId}`
            );
            const customizeData = customizeResponse.data;
            setConfig(customizeData);
          } else {
            console.error("User ID not found in the data:", data);
          }
        }
      } catch (error) {
        console.error("Error fetching user or customization data:", error);
      }
    };

    fetchConfig();
  }, []);

  // Fetch session token and decode it
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       if (typeof window !== "undefined") {
  //         const appBridgeConfig = {
  //           apiKey: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY,
  //           host: process.env.NEXT_PUBLIC_SHOPIFY_HOST,
  //         };
  //         const app = createApp(appBridgeConfig);
  //         const sessionToken = await getSessionToken(app);

  //         if (typeof sessionToken === "string" && sessionToken !== "") {
  //           const decodedToken = jwtDecode(sessionToken);
  //           const shopifyUserId = decodedToken.sub;
  //           console.log(app, sessionToken, shopifyUserId);
  //         } else {
  //           console.error("Invalid session token:", sessionToken);
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error decoding session token:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  const handleSend = async (message) => {
    const finalMessage = message || input;
    if (finalMessage.trim() === "") return;

    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      {
        text: finalMessage,
        sender: "user",
        subData: "",
        time: timestamp,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://ec2-54-235-174-119.compute-1.amazonaws.com:5436/chat",
        { message: finalMessage }
      );

      if (response.status === 200 && response.data) {
        const botResponse = response.data;
        const botTimestamp = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        setMessages((prev) => [
          ...prev,
          {
            text: botResponse.text,
            sender: "bot",
            subData: botResponse.subData,
            time: botTimestamp,
          },
        ]);
      }
    } catch (error) {
      console.error("Error fetching bot response:", error);
    } finally {
      setLoading(false);
    }
  };
  if (typeof window !== "undefined") {
    console.log(window.location.hostname, "Hostname");
    console.log(window.location.ancestorOrigins?.[0], "Ancestor Origin"); // Use optional chaining in case `ancestorOrigins` is undefined
    console.log(window, config.chatbotTitle, "window");
  } else {
    console.log("Window is not available (SSR environment)");
  }
  const handleKeyDown = () => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };
  return (
    <div className="relative">
      {isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className={`fixed bottom-0 right-0 z-[9999] mb-0 h-screen w-full rounded-2xl @2xl:bottom-16 @2xl:right-8 @2xl:mb-96 @2xl:w-96 sm:bottom-16 sm:right-8 sm:mb-96 sm:h-[180px] sm:w-96`}
          >
            <TabGroup>
              <TabList
                className="relative flex items-start rounded-t-2xl py-1"
                style={{
                  background: config.bgColor,
                  // borderRadius: config.layout.borderRadius,
                  // color: config.theme.textColor,
                  // padding: "10px",
                }}
              >
                <div className="flex flex-col gap-2">
                  <Tab className="flex items-start gap-2 rounded-xl px-6 py-1 font-semibold text-white">
                    <img
                      src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-07.webp"
                      className="h-9 w-9 rounded-full bg-white p-1 text-gray-900"
                      alt="Bot Avatar"
                    />

                    <span className="flex flex-col items-start justify-center px-2">
                      <span className="text-[0.9rem]">
                        {config.chatbotTitle}
                      </span>
                      <span className="text-[0.7rem] font-normal">
                        You can ask me anything.
                      </span>
                    </span>
                  </Tab>
                </div>

                <button
                  className="absolute right-6 top-3 text-2xl text-white hover:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  &times;
                  {/* This is the 'X' symbol, you can also use an icon here */}
                </button>
              </TabList>

              <TabPanels
                className={`${styles["gradient-border"]} bg-gradient-to-r from-violet-600 to-indigo-600`}
              >
                <TabPanel className={`${styles["gradient-border-1"]}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex flex-col rounded-md h-[450px]">
                      <div className="flex flex-1 flex-col space-y-2 overflow-y-auto p-3">
                        <div
                          className={`chat-message flex max-w-xs items-end gap-2 self-start rounded-lg`}
                        >
                          <div className="flex-shrink-0">
                            <img
                              src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-07.webp"
                              className="h-7 w-7 rounded-full bg-white p-1 text-gray-900"
                            />{" "}
                          </div>
                          <div
                            className={`rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-900`}
                          >
                            Hello! How can I help you?
                          </div>
                        </div>
                        <div className="flex-row-2 ml-8 mt-4 flex flex-wrap gap-2">
                          <Button
                            rounded="pill"
                            className="border-gradient-to-r mt-2 border-2 bg-white from-violet-600 to-indigo-600 px-3 py-1.5 text-indigo-600 transition-all duration-300 ease-in-out hover:border-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 hover:text-white"
                            size="sm"
                            onClick={() => handleOffer("Special Offers")}
                          >
                            Special Offer
                          </Button>

                          <Button
                            rounded="pill"
                            className="border-gradient-to-r mt-2 border-2 bg-white from-violet-600 to-indigo-600 px-3 py-1.5 text-indigo-600 transition-all duration-300 ease-in-out hover:border-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 hover:text-white"
                            size="sm"
                            onClick={() => handleOffer("Summer Outfits")}
                          >
                            Summer Outfits
                          </Button>
                          <Button
                            rounded="pill"
                            className="border-gradient-to-r mt-2 border-2 bg-white from-violet-600 to-indigo-600 px-3 py-1.5 text-indigo-600 transition-all duration-300 ease-in-out hover:border-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 hover:text-white"
                            size="sm"
                            onClick={() => handleOffer("Buy a Giftcard")}
                          >
                            Buy a Giftcard
                          </Button>
                          <Button
                            rounded="pill"
                            className="border-gradient-to-r mt-2 border-2 bg-white from-violet-600 to-indigo-600 px-3 py-1.5 text-indigo-600 transition-all duration-300 ease-in-out hover:border-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 hover:text-white"
                            size="sm"
                            onClick={() => handleOffer("New Collection")}
                          >
                            New Collection
                          </Button>
                        </div>

                        {messages.map((msg, index) => {
                          const isAccordionTitle = [
                            "Men's Fashions",
                            "Women's Special Fashions",
                            "Summer Special",
                          ].includes(msg.subData);
                          console.log(messages, "messages");
                          return (
                            <div
                              key={index}
                              className={`chat-message ${
                                msg.sender === "user"
                                  ? "self-end text-white"
                                  : "flex items-end gap-2 self-start"
                              } max-w-xs rounded-lg`}
                            >
                              {msg.sender === "bot" && !isAccordionTitle && (
                                <div className="flex-shrink-0">
                                  <img
                                    src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-07.webp"
                                    className="h-7 w-7 rounded-full bg-white p-1 text-gray-900"
                                  />
                                </div>
                              )}
                              {!isAccordionTitle && (
                                <div>
                                  <div
                                    className={`${
                                      msg.sender === "user"
                                        ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white"
                                        : "bg-gray-100 text-gray-900"
                                    } rounded-lg px-3 py-1.5 text-sm`}
                                  >
                                    {typeof msg.text === "string"
                                      ? msg.text
                                      : msg?.text?.response}
                                  </div>
                                  <div className="mt-2 bg-white text-xs text-gray-500">
                                    {msg.time}
                                  </div>
                                </div>
                              )}

                              {isAccordionTitle && (
                                <div className="mx-8 border-b-2 border-gray-300 last:border-b-0">
                                  <Button
                                    rounded="pill"
                                    className="mt-2 border-2 border-blue-200 bg-white bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text px-3 py-1.5 text-transparent"
                                    size="sm"
                                    onClick={() => handleSend(msg.subData)}
                                  >
                                    {msg.subData}
                                  </Button>
                                </div>
                              )}
                            </div>
                          );
                        })}

                        {loading && (
                          <div
                            className={`chat-message flex max-w-xs items-start gap-2 rounded-lg`}
                          >
                            <div className="flex-shrink-0">
                              <img
                                src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars/avatar-07.webp"
                                className="h-7 w-7 rounded-full bg-white p-1 text-gray-900"
                              />
                            </div>
                            <div className="flex items-start">
                              <div className="flex space-x-2">
                                <div className="animate-bounce bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text px-1 text-2xl text-transparent">
                                  .
                                </div>
                                <div className="animate-bounce bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text px-1 text-2xl text-transparent">
                                  .
                                </div>
                                <div className="animate-bounce bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text px-1 text-2xl text-transparent">
                                  .
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="relative mt-4">
                          <div className="scrollbar-hide flex overflow-x-auto">
                            {products.length > 0 &&
                              products.map((product) => (
                                <div
                                  key={product.id}
                                  className="m-2 w-64 flex-shrink-0 rounded-lg border border-gray-300 bg-white p-4 shadow transition-shadow duration-200 hover:shadow-lg"
                                >
                                  <h3 className="text-lg font-semibold">
                                    {product.name}
                                  </h3>
                                  <p className="text-sm text-gray-500">
                                    Product ID: {product.id}
                                  </p>
                                  <p className="mt-1 text-gray-700">
                                    {product.description}
                                  </p>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`mt-2 rounded-full border-2 bg-gray-200 bg-clip-text px-3 py-1 text-transparent`}
                      >
                        <div className="flex gap-2">
                          <input
                            placeholder="Type your message..."
                            className="flex-1 rounded-full border-none text-xs text-gray-500 outline-none focus:ring-0"
                            type="text"
                            value={input}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setInput(e.target.value)}
                          />
                          <button
                            onClick={() => handleSend(input)}
                            className="rounded-full border-2 border-transparent bg-gradient-to-r from-violet-600 to-indigo-600 px-2 py-1.5 text-sm font-bold text-white transition duration-300 ease-in-out"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="white"
                              className="bi bi-arrow-up-circle-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <Text className="flex items-center justify-center py-2 text-center text-sm font-medium text-gray-400">
                        <span className="text-[0.6rem]">Powered by</span>{" "}
                        <span className="ml-2 flex items-center justify-center gap-2">
                          <ChatSolidIcon className="mt-2 h-5 w-5" /> Lumniverse
                        </span>
                      </Text>
                    </div>
                  </motion.div>
                </TabPanel>
                <TabPanel className="gradient-border-1">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex h-[500px] flex-col overflow-hidden rounded-t-md">
                      <div className="flex-1 space-y-2 overflow-y-auto p-5">
                        {[
                          "Get Started with help of",
                          "Billing and plans guide",
                          "Enable External Forwarding",
                          "Get Started with help of",
                          "Billing and plans guide",
                          "Enable External Forwarding",
                          "Get Started with help of",
                          "Billing and plans guide",
                          "Enable External Forwarding",
                        ].map((section) => (
                          <Disclosure
                            key={section}
                            as="div"
                            className="border-b last:border-b-0"
                          >
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full items-center gap-4 py-4 text-left text-sm font-medium text-gray-900">
                                  {open ? (
                                    <BiMinus className="h-5 w-5 text-blue-500 transition-transform duration-200" />
                                  ) : (
                                    <BiPlus className="h-5 w-5 text-blue-500 transition-transform duration-200" />
                                  )}
                                  <span>{section}</span>
                                </Disclosure.Button>
                                <AnimatePresence>
                                  {open && (
                                    <motion.div
                                      initial="closed"
                                      animate="open"
                                      exit="closed"
                                      variants={accordionVariants}
                                      transition={{ duration: 0.3 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="px-4 pb-4 text-sm text-gray-500">
                                        This is the content for {section}. You
                                        can put any information here.
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </>
                            )}
                          </Disclosure>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </TabPanel>
                <TabPanel>
                  <div className="flex h-[400px] flex-col rounded-t-md">
                    Content for Another Tab
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </motion.div>
        </AnimatePresence>
      )}

      <button
        className="fixed bottom-10 right-8 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 p-4 text-white transition-transform hover:scale-105"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <MdCancel className="h-8 w-8" />
        ) : (
          <MdChat className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default Chatbot;
