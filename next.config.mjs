/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      {
        source: "/opengraph-image",
        destination: "/opengraph-image.jpg",
      },
      {
        source: "/twitter-image",
        destination: "/twitter-image.jpg",
      },
    ];
  },
};

export default nextConfig;
