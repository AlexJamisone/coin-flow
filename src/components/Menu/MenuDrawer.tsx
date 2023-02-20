import {
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerHeader,
	DrawerContent,
	DrawerFooter,
} from "@chakra-ui/react";

interface MenuDrawerProps {
	isOpen: boolean;
	onClose: () => void;
}

const MenuDrawer = ({isOpen, onClose}: MenuDrawerProps) => {
	return (
        <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>
                    Профиль
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    )
};

export default MenuDrawer;
