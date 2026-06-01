/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  // React Compiler (stable in Next 16): automatic memoization of components.
  reactCompiler: true,
  images: {
    // Prefer AVIF (smaller) and fall back to WebP.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "www.daniilrose.com" },
      { protocol: "https", hostname: "daniilrose.com" },
    ],
  },
};

export default nextConfig;
