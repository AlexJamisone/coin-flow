import { Center, Button, Icon, useDisclosure } from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import IncomeModal from "./IncomeModal";
const Income = () => {
	const {isOpen, onClose, onToggle} = useDisclosure()
	return (
		<Center>
			<Button
				onClick={() => onToggle()}
				w="100%"
				leftIcon={<Icon as={IoIosAddCircleOutline} fontSize={25}/>}
				m={5}
			>
				Новый счёт
			</Button>
			<IncomeModal isOpen={isOpen} onClose={onClose}/>
		</Center>
	);
};

export default Income;
