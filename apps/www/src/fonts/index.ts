import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "Inter-4.0/InterVariable.woff2",
      style: "normal",
    },
    {
      path: "Inter-4.0/InterVariable-Italic.woff2",
      style: "italic",
    },
  ],
  weight: "100 900",
  display: "swap",
  variable: "--font-sans",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0020-007F",
    },
  ],
});

const jetBrainsMono = localFont({
  src: "JetBrainsMono-2.304/JetBrainsMono-Variable.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-mono",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0020-007F",
    },
  ],
});

const playfairLogo = localFont({
  src: "Playfair-2.1/Playfair-RegularBold-Logo.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-logo",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0053",
    },
  ],
});

const playfair = localFont({
  src: [
    {
      path: "Playfair-2.1/PlayfairRomanVF.woff2",
      style: "normal",
    },
    {
      path: "Playfair-2.1/PlayfairItalicVF.woff2",
      style: "italic",
    },
  ],
  weight: "100 900",
  display: "swap",
  variable: "--font-serif",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0020-007F",
    },
  ],
});

const plusJakartaSans = localFont({
  src: "PlusJakartaSans-2.7.1/PlusJakartaSans.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-heading",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0020-007F",
    },
  ],
});

const _calSans = localFont({
  src: "CalSans-1.0.0/CalSans-SemiBold.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-heading",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0020-007F",
    },
  ],
});

export const fonts = [
  inter.variable,
  playfair.variable,
  playfairLogo.variable,
  jetBrainsMono.variable,
  plusJakartaSans.variable,
].join(" ");

/**
 * Font loader for open graph route
 */
export async function getOgFonts() {
  const [inter400, calSans600, playfairLogo700] = await Promise.all([
    fetch(new URL("Inter-4.0/Inter-Regular.woff", import.meta.url)).then(
      (res) => res.arrayBuffer(),
    ),
    fetch(new URL("CalSans-1.0.0/CalSans-SemiBold.woff", import.meta.url)).then(
      (res) => res.arrayBuffer(),
    ),
    fetch(
      new URL("Playfair-2.1/Playfair-RegularBold-Logo.woff", import.meta.url),
    ).then((res) => res.arrayBuffer()),
  ]);

  return [
    {
      name: "Inter 400",
      data: inter400,
      style: "normal",
    },
    {
      name: "CalSans 600",
      data: calSans600,
      style: "normal",
    },
    {
      name: "Playfair 700",
      data: playfairLogo700,
      style: "normal",
    },
  ];
}
