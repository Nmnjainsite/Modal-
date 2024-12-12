import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  webpack(config) {
    config.resolve.alias["react"] = path.resolve("./node_modules/react");
    config.resolve.alias["react-dom"] = path.resolve(
      "./node_modules/react-dom"
    );
    return config;
  },
};

export default nextConfig;
