import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/e-commerce-platform",
        destination: "/work/polyhouse-smart-farming-web",
        permanent: true,
      },
      {
        source: "/work/saas-dashboard",
        destination: "/work/home-tuition-bhopal",
        permanent: true,
      },
      {
        source: "/work/restaurant-chain-seo",
        destination: "/#work",
        permanent: false,
      },
      {
        source: "/work/fintech-landing-page",
        destination: "/#work",
        permanent: false,
      },
      {
        source: "/work/brand-identity-overhaul",
        destination: "/#work",
        permanent: false,
      },
      {
        source: "/work/healthcare-app",
        destination: "/#work",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
