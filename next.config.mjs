/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // avocado emoji parsed
        source: "/%F0%9F%A5%91",
        destination: "/guac",
        permanent: true,
      },
      {
        // short links
        source: "/go/:slug",
        destination: "https://link.kalinpatel.com/:slug",
        permanent: true,
      },
    ];
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
      };
    }
    return config;
  },
};

export default nextConfig;
