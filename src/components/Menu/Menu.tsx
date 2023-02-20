import { useDisclosure, IconButton, Box } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuDrawer from "./MenuDrawer";
import { motion } from "framer-motion";
const Menu = () => {
	const { isOpen, onToggle, onClose } = useDisclosure();
	return (
		<Box
			mt={3}
			ml={3}
			as={motion.div}
			initial={{ x: -70, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
            transitionDuration='1s'
		>
			<IconButton
				aria-label="menu"
				icon={<AiOutlineMenu />}
				onClick={() => onToggle()}
			/>
			<MenuDrawer isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};

export default Menu;
