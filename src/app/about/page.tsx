import { SEO } from "@/components/global/SEO";
import { AboutPageContainer } from "@/container";
import { Metadata } from "next";

export const metadata: Metadata = SEO({
  prefix: "About",
  path: "/about",
  description:
    "Learn about Stephen Gift's journey as a Frontend Engineer, goals in the program, areas of expertise, and personal reflections on growth and development.",
  keywords:
    "Stephen Gift about, frontend engineer bio, developer journey, programming goals, software development career"
});
const AboutPage = () => {
  return (
    <>
      <AboutPageContainer />
    </>
  );
};

export default AboutPage;
