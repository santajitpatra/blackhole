/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "unsplash.com",
      "fakestoreapi.com",
      "santa-api.onrender.com",
    ],
  },

  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};

module.exports = nextConfig
