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
};

export default nextConfig;
