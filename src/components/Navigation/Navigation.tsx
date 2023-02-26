import { Center, Stack, Text, Icon } from "@chakra-ui/react";
import { MdAccountBalanceWallet, MdOutlineCategory } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { BsReceipt } from "react-icons/bs";
import { IconType } from "react-icons/lib/esm/iconBase";
import { motion } from "framer-motion";
import Link from "next/link";

interface Navigation {
	id: number;
	href: string;
	icon: IconType;
	text: string;
}

const navigation: Navigation[] = [
	{ id: 1, href: "/balance", icon: MdAccountBalanceWallet, text: "Счета" },
	{ id: 2, href: "/category", icon: MdOutlineCategory, text: "Категории" },
	{ id: 3, href: "/operations", icon: BsReceipt, text: "Операции" },
	{ id: 4, href: "/charts", icon: IoStatsChartSharp, text: "Статистика" },
];

const Navigation = () => {
	return (
		<Center
			as={motion.nav}
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transitionDuration="1s"
			justifyContent="space-around"
			h="100%"
			backgroundColor="whiteAlpha.50"
			boxShadow="dark-lg"
			py={3}
		>
			{navigation.map(({ href, icon, id, text }: Navigation) => (
				<Link key={id} href={href}>
					<Stack alignItems="center">
						<Icon as={icon} fontSize={30} />
						<Text>{text}</Text>
					</Stack>
				</Link>
			))}
		</Center>
	);
};

export default Navigation;
