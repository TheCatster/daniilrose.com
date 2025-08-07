/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL('https://www.daniilrose.com/**')],
  },
};

export default nextConfig;
