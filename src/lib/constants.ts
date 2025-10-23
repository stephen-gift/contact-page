import { NavItem } from "@/types";
import { EnergyIcon } from "./customIcons";
import { ROUTES } from "./routes";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: ROUTES.HOME,
    targetBlank: false
  },
  {
    label: "About",
    href: ROUTES.ABOUT,
    targetBlank: false
  },
  {
    label: "Contact",
    href: ROUTES.CONTACT,
    targetBlank: false
  }
  // {
  //   label: "Resources",
  //   href: "javascript:void(0)",
  //   description:
  //     "Find out everything you need to know about VeendHQ, and how our products work.",
  //   childrenColumn: 2,
  //   children: [
  //     {
  //       label: "How to Videos",
  //       subLabel:
  //         "Check out some of our tutorial videos to guide you on how to use some of our products.",
  //       href: "/how-to-videos",
  //       icon: EnergyIcon
  //     },
  //     {
  //       label: "FAQs",
  //       subLabel:
  //         "Get answers to frequently asked questions by hundreds of our customers.",
  //       href: "/faq"
  //     },
  //     {
  //       label: "Knowledge Base",
  //       subLabel:
  //         "Get access to helpful information that will help you know more about our products.",
  //       href: "/knowledge-base",
  //       targetBlank: true
  //     }
  //   ]
  // }
];
