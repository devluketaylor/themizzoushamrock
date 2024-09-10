import type { Metadata } from "next";
import { Vesper_Libre } from "next/font/google";
import "./globals.css";

const standardFont = Vesper_Libre({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "The Mizzou Shamrock",
	description:
		"The official magazine of the University of Missouri, college of engineering",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${standardFont.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
