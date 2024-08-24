import React from "react";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";
import { link } from "fs";
const socials = [
	{
		icon: <FaGithub />,
		path: "https://github.com/oziuzoma",
	},
	{
		icon: <FaLinkedin />,
		path: "https://www.linkedin.com/in/ozi-uzoma-679a94101/",
	},
];

const Social = ({ containerStyles, iconsStyles }: any) => {
	return (
		<div key={""} className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<div key={index}>
						<Link href={item.path} className={iconsStyles}>
							{item.icon}
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Social;
