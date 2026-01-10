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
