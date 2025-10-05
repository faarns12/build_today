import localFont from "next/font/local";

export const neueHaas = localFont({
  src: [
    {
      path: "../../public/fonts/Neue/neuehaasgrotdispround-55roman-trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Neue/neuehaasgrotdispround-65medium-trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Neue/neuehaasgrotdispround-66mediumitalic-trial.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Neue/neuehaasgrotdispround-75bold-trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neuehaas",
  display: "swap",
});


export const satoshi = localFont({
  src: [
    { path: "../../public/fonts/Satoshi/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Satoshi/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Satoshi/Satoshi-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Satoshi/Satoshi-Light.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});