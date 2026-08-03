/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // GitHub Pages serves the site from /<repo-name>, not the domain root,
  // so every asset path needs this prefix or the CSS and JS 404.
  basePath: "/SA-GDdashboard",
  images: { unoptimized: true },
  // Pages runs Jekyll by default, which ignores _next/ folders.
  trailingSlash: true,
};

export default nextConfig;