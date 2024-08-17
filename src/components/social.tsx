import React from "react";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";
import { link } from "fs";
const socials = [
	{
		icon: <FaGithub />,
		path: "",
	},
	{
		icon: <FaLinkedin />,
		path: "",
	},
	{
		icon: <FaTwitter />,
		path: "",
	},
	{
		icon: <FaMedium />,
		path: "",
	},
];

const Social = ({ containerStyles, iconsStyles }: any) => {
	return (
		<div key={""} className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<div key={index}>
						<Link href={"item.path"} className={iconsStyles}>
							{item.icon}
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Social;
