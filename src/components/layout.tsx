import Header from "./Header";
import Footer from "./Footer";
// Next.jsが推奨しているフォントの一覧に日本語対応のフォントが少なかった為、今回は使用しない
// 公式：https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#google-fonts
// 参考：https://commte.net/nextjs-google-font
// https://fonts.google.com/variablefonts
import { Noto_Sans_JP } from "next/font/google";
const notojp = Noto_Sans_JP({
    weight: ["400"],
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
