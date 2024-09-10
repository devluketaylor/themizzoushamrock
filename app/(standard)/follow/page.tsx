import PageLayout from "@/components/shared/page-layout";
import FollowCard from "@/components/standard/follow-card";
import Navbar, { NavLinks } from "@/components/standard/navbar";

const FollowPage = () => {
	return (
		<PageLayout>
			<Navbar isActive={NavLinks.follow} />
			<FollowCard />
		</PageLayout>
	);
};

export default FollowPage;
