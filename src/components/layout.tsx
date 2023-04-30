// components/layout.js
import Navbar from "./Navbar";
import Footer from "./footer";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
