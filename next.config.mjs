/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — GitHub Pages / Vercel dono par chalta hai
  output: "export",
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
