import { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
	return <div className="px-8 max-w-7xl mx-auto">{children}</div>;
};

export default PageLayout;
