import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { Manrope } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import LayoutMain from "../components/layout/LayoutMain";
import LayoutNav from "@/components/layout/LayoutNav";
import LayoutContent from "@/components/layout/LayoutContent";

// const inter = Manrope({
// 	weight: ["300", "400", "500", "700"],
// 	subsets: ["cyrillic", "latin"],
// 	display: "swap",
// 	fallback: ["Arial", "sans-serif"],
// });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<LayoutNav />
				<Provider>
					<LayoutMain>{children}</LayoutMain>
				</Provider>
				<LayoutContent />
			</body>
		</html>
	);
}