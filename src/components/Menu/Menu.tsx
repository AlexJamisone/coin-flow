import { useDisclosure, IconButton, Box, Text, Center } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuDrawer from "./MenuDrawer";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Menu = () => {
	const { isOpen, onToggle, onClose } = useDisclosure();
	const router = useRouter();
	return (
		<Box
			mt={3}
			ml={3}
			as={motion.div}
			initial={{ x: -70, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transitionDuration="1s"
			display="flex"
			alignItems="center"
		>
			<IconButton
				aria-label="menu"
				icon={<AiOutlineMenu />}
				onClick={() => onToggle()}
			/>
			<Text my={0} mx="auto" fontSize={29} fontWeight={500}>
				{router.pathname === "/balance"
					? "Счета"
					: router.pathname === "/category"
					? "Категории"
					: router.pathname === "/operations"
					? "Операции"
					: "Статистика"}
			</Text>
			<MenuDrawer isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};

export default Menu;
