import Footer from "@/components/standard/footer";
import { ReactNode } from "react";

const StandardLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			{children}
			<Footer />
		</>
	);
};

export default StandardLayout;
