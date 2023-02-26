import {
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerHeader,
	DrawerContent,
	DrawerFooter,
	Text,
	Switch,
	useColorMode,
	Stack,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Auth from "../Auth/Auth";

interface MenuDrawerProps {
	isOpen: boolean;
	onClose: () => void;
}

const MenuDrawer = ({ isOpen, onClose }: MenuDrawerProps) => {
	const { data: session } = useSession();
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Drawer isOpen={isOpen} onClose={onClose} placement="left">
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>{session ? "Профиль" : "Войти"}</DrawerHeader>
				<Auth />
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					p={3}
				>
					<Text fontSize={21}>Тёмный режим</Text>
					<Switch
						isChecked={colorMode === "dark" ? true : false}
						onChange={() => toggleColorMode()}
					/>
				</Stack>
			</DrawerContent>
		</Drawer>
	);
};

export default MenuDrawer;
