import { SEO } from "@/components/global/SEO";
import { HomePageContainer } from "@/container";
import { Metadata } from "next";

export const metadata: Metadata = SEO({
  prefix: "Home",
  path: "/",
  description:
    "Stephen Gift - Frontend Engineer specializing in React, Next.js, and TypeScript. Crafting beautiful, functional digital experiences that inspire and make a difference.",
  keywords:
    "Stephen Gift, frontend engineer, React developer, Next.js, TypeScript, web development, portfolio, software engineer"
});

export default function HomePage() {
  return (
    <>
      <HomePageContainer />
    </>
  );
}
