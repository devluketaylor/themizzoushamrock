const Footer = () => {
	return (
		<footer>
			<div className="py-12 bg-green-900">
				<div className="max-w-7xl px-8">
					<p className="text-white">The Mizzou Shamrock</p>
					<p className="text-xs text-white">Mizzou - College Of Engineering</p>
				</div>
			</div>

			<div className="py-32 bg-primary">
				<div className="flex gap-12">
					<ul>
						<li>Home</li>
						<li>Issues</li>
						<li>Watch</li>
						<li>Follow</li>
						<li>Contact</li>
					</ul>

					<ul>
						<li>Privacy Policy</li>
						<li>Terms Of Service</li>
						<li>Cookies Policy</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
