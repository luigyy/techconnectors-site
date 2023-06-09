// components/layout.js
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

//@ts-ignore
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
