"use client";

import { useState } from "react";
import Modal from "./components/modal";
import Chatbot from "./components/chatbot";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      sss
      {/* <h1 className="text-3xl mb-4">Welcome to Next.js Modal</h1>
      <button
        onClick={toggleModal}
        className="bg-blue-500 text-white p-4 rounded"
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={toggleModal} /> */}
      <Chatbot />
    </div>
  );
};

export default HomePage;
