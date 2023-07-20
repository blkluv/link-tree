import AppLogo from "./assets/icons/app-logo.svg";
import Official from "./assets/icons/official.svg";
import Twitter from "./assets/icons/twitter.svg";
import LinkedIn from "./assets/icons/linkedin.svg";
import Youtube from "./assets/icons/youtube.svg";
import Discord from "./assets/icons/discord.svg";
import GitHub from "./assets/icons/github.svg";
import Email from "./assets/icons/email.svg";
import TikTok from "./assets/icons/tiktok.svg";

const config = {
  logoUrl: AppLogo,
  favicon: "../favicon.ico",
  title: "Spheron Link Tree",
  description:
    "Arvrtise your socials ",
  links: [
    {
      key: "official",
      label: "Official Website",
      iconUrl: Official,
      redirectUrl: "https://arvrtise.com/",
    },
    {
      key: "tiktok",
      label: "TikTok",
      iconUrl: TikTok,
      redirectUrl: "https://www.tiktok.com/@arvrtise",
    },
    {
      key: "twitter",
      label: "Twitter",
      iconUrl: Twitter,
      redirectUrl: "https://twitter.com/arvrtise",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      iconUrl: LinkedIn,
      redirectUrl: "https://www.linkedin.com/showcase/89771536/",
    },
    {
      key: "youtube",
      label: "YouTube",
      iconUrl: Youtube,
      redirectUrl: "https://www.youtube.com/channel/UC5KrliItLOEFpxt5A2JyTKQ",
    },
    {
      key: "discord",
      label: "Discord",
      iconUrl: Discord,
      redirectUrl: "https://discord.gg/nfAmqTGNAU",
    },
    {
      key: "email",
      label: "Email Support",
      iconUrl: Email,
      redirectUrl: "mailto:info@arvrtise.com",
    },
  ],
};

export default config;
