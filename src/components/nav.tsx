"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "services",
		path: "/services",
	},
	{
		name: "about me",
		path: "/aboutme",
	},
	{
		name: "projects",
		path: "/projects",
	},
	{
		name: "contact",
		path: "/contact",
	},
];

const Nav = () => {
	const pathname = usePathname();
	return (
		<nav className="flex gap-8 p-4">
			{links.map((link, index) => {
				return (
					<div key={index}>
						<Link
							href={link.path}
							className={`${
								link.path === pathname && "text-accent border-accent"
							} capitalize font-medium hover:text-accent transition-all`}>
							{link.name}
						</Link>
					</div>
				);
			})}
		</nav>
	);
};

export default Nav;
