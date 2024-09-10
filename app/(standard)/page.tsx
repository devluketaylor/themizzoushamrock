import PageLayout from "@/components/shared/page-layout";
import Navbar, { NavLinks } from "@/components/standard/navbar";

const HomePage = () => {
	return (
		<>
			<Navbar isActive={NavLinks.home} />
			<PageLayout>hello</PageLayout>
		</>
	);
};

export default HomePage;
