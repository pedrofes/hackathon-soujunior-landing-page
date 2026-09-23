/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "localhost",
    "192.168.100.218",
    "192.168.*.*",
  ],
};

export default nextConfig;