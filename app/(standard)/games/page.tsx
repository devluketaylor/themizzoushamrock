import PageLayout from "@/components/shared/page-layout";
import Navbar, { NavLinks } from "@/components/standard/navbar";

const GamesPage = () => {
	return (
		<PageLayout>
			<Navbar isActive={NavLinks.games} />
		</PageLayout>
	);
};

export default GamesPage;
