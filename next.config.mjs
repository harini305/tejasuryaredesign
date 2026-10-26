/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images are pre-optimized by scripts/build-images.mjs; avoid Vercel Image Optimization usage.
  images: { unoptimized: true },
  poweredByHeader: false,

  // Long browser caching for static images so repeat visits don't hit the CDN again.
  // Filenames are not hashed: give an image a new name if its content ever changes.
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
