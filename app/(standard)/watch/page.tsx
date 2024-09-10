import PageLayout from "@/components/shared/page-layout";
import Navbar, { NavLinks } from "@/components/standard/navbar";

const WatchPage = () => {
	return (
		<PageLayout>
			<Navbar isActive={NavLinks.watch} />
		</PageLayout>
	);
};

export default WatchPage;
