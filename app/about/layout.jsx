import Link from "next/link";

export const metadata = {
  title: "About Page",
  description: "About Page for data about our website",
  keywords:
    "web development, web design, javascript, react, next, node, html, css",
};

export default function RootLayout({ children }) {
  return (
    <>
      <h1
        className="links header"
        style={{
          margin: 0,
          border: "5px solid",
          borderTop: "none",
        }}
      >
        <Link href="/about">That's a special inner Layout for About dir</Link>
      </h1>
      <main className="container">{children}</main>
    </>
  );
}
