import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

export enum NavLinks {
	home,
	read,
	watch,
	games,
	follow,
}

const Navbar = ({ isActive }: { isActive?: NavLinks }) => {
	return (
		<nav className="bg-green-900 px-8">
			<div className="max-w-[1500px] mx-auto flex justify-between text-white">
				<div>
					<h1 className="text-xl py-2">The Mizzou Shamrock</h1>
				</div>

				<div className="gap-3 items-center hidden md:flex">
					<NavLink text="Home" link="/" isActive={isActive === NavLinks.home} />
					<NavLink
						text="Read"
						link="/read"
						isActive={isActive === NavLinks.read}
					/>
					<NavLink
						text="Watch"
						link="/watch"
						isActive={isActive === NavLinks.watch}
					/>
					<NavLink
						text="Games"
						link="/games"
						isActive={isActive === NavLinks.games}
					/>
					<NavLink
						text="Follow"
						link="/follow"
						isActive={isActive === NavLinks.follow}
					/>
				</div>

				<div className="flex md:hidden">
					<Sheet>
						<SheetTrigger>
							<GiHamburgerMenu className="w-5 h-5" />
						</SheetTrigger>
						<SheetContent>
							<SheetContentComp />
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
};

const NavLink = ({
	text,
	link,
	isActive,
}: {
	text: string;
	link: string;
	isActive?: boolean;
}) => {
	return (
		<Link href={link} className={`${isActive && "text-primary font-bold"}`}>
			{text}
		</Link>
	);
};

const SheetContentComp = () => {
	return <div className="bg-white">hello</div>;
};

export default Navbar;
