/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["upload.wikimedia.org", "www.nftgators.com", "www.pinterest.com"],
  },
};

module.exports = nextConfig;
