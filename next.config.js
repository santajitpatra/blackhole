// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = {
  images: {
    domains: ["unsplash.com", "fakestoreapi.com"],
  },

  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
