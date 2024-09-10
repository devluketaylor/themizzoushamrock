import Link from "next/link";
import { ReactNode } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const FollowCard = () => {
	return (
		<div className="bg-gradient-to-br from-emerald-600/5 to-emerald-900/5 rounded-md p-5">
			<FollowButton
				logo={<FaTiktok />}
				text="Tiktok"
				link="https://www.tiktok.com/@the_shamrock_mu"
			/>
		</div>
	);
};

const FollowButton = ({
	logo,
	link,
	text,
}: {
	logo: ReactNode;
	link: string;
	text: string;
}) => {
	return (
		<Link href={link}>
			<div className="rounded-md">
				<div>
					<div>{logo}</div>
					<p>{text}</p>
				</div>

				<div>
					<DropdownMenu>
						<DropdownMenuTrigger>
							<BsThreeDotsVertical />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>Copy Link</DropdownMenuItem>
							<DropdownMenuItem>Go To Site</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</Link>
	);
};

export default FollowCard;
