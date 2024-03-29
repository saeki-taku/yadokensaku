// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";
// components
import Meta from "@/components/meta";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="ja">
				<Head>
					<Meta />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
