import "./globals.css";

export const metadata = {
  title: "Instagram Clone App",
  description: "Instagram Clone created by Next js 13 and Tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
