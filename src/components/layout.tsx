import Header from "./Header";
import Footer from "./Footer";
// import { Inter } from "next/font/google";
import { Noto_Sans_JP, Rampart_One } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const notojp = Noto_Sans_JP({
    weight: ["400"],z
    subsets: ["latin"],
    // display: "swap",
});

const RampartOneFont = Rampart_One({
    weight: "400",
    subsets: ["latin"],
});

export default function Layout({ children }: any) {
    return (
        <>
            <Header />
            <main className={notojp.className}>{children}</main>
            <Footer />
        </>
    );
}
