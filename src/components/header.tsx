"use client";
import React from "react";

import Link from "next/link";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Nav from "./nav";
import MobileNav from "./mobilenav";

const Header = () => {
	const handleDownload = () => {
		const cvUrl = "";
		const link = document.createElement("a");
		link.href = cvUrl;
		link.download = "";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<header className="py-10 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/">
					{/* logo */}
					<h1 className="text-4xl font-semibold p-4">
						Uzoma<span className="text-accent p-4"> . </span>
					</h1>
				</Link>
				{/* deskstop nav and download button nav */}
				<div className="hidden xl:flex items-center gap-8">
					<Nav />
					<div className="">
						<Button
							onClick={handleDownload}
							size="lg"
							className="uppercase flex items-center gap-2">
							<span>Download cv</span>
							<FiDownload className="text-xl" />
						</Button>
					</div>
				</div>

				{/* mobile nav */}
				<div className="xl:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
