import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="preload"
					href="/fonts/sf-pro/SFPRODISPLAYBOLD.OTF"
					as="font"
					type="font/otf"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/sf-pro/SFPRODISPLAYMEDIUM.OTF"
					as="font"
					type="font/otf"
					crossOrigin="anonymous"
				/>
				<link
					rel="preload"
					href="/fonts/sf-pro/SFPRODISPLAYREGULAR.OTF"
					as="font"
					type="font/otf"
					crossOrigin="anonymous"
				/>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon.png"></link>
				<meta name="theme-color" content="#e1dfdd" />
			</Head>
			<body className="hide">
				<Main />
				<NextScript />
				<div id="modal-root"></div>
				<div id="filter-root"></div>
			</body>
		</Html>
	);
}
