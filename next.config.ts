import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 16 blocks the dev HMR websocket as a cross-origin resource unless the
  // host is allowlisted. Without this the dev runtime never connects, no client
  // JS boots, and the page renders as a dead static shell (no hydration/animation).
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
