import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className} style={{ maxWidth: 860, margin: "0 auto", padding: "0 1rem 3rem" }}>
      <Nav />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
