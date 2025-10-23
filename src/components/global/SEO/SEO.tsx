import { Metadata } from "next";

interface MetadataProps {
  prefix?: string;
  suffix?: string;
  path: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export const SEO = ({
  prefix,
  suffix,
  path,
  description = "Stephen Gift is a skilled software developer specializing in modern web technologies, React, Next.js, and full-stack development. Explore projects and get in touch.",
  keywords = "Stephen Gift, software developer, web developer, React, Next.js, TypeScript, full-stack development, portfolio, web technologies",
  image = "/og-image.jpeg"
}: MetadataProps): Metadata => {
  const siteName = "Stephen Gift";
  const author = "Stephen Gift";
  const twitterHandle = "@stephengift"; // Update with your actual Twitter handle
  const baseUrl = "https://stephen-contact-page.vercel.app"; // Update with your actual domain

  const title = `${prefix ? prefix + " | " : ""}${siteName}${
    suffix ? " - " + suffix : ""
  }`;
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteName
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: twitterHandle,
      site: twitterHandle
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png"
    },
    manifest: "/site.webmanifest"
  };
};
