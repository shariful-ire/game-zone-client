/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "i.ibb.co" },
      { hostname: "lh3.googleusercontent.com" },
    ],
  },
  async rewrites() {
    const backendUrl =
      process.env.API_SERVER_URL || "http://localhost:5000";
    return [
      {
        source: "/api/ext/:path*",
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
