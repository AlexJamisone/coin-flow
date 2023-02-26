import { Center, Button, Icon } from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
const Income = () => {
	const handleIncome = () => {
		
	}
	return (
		<Center>
			<Button
				onClick={() => handleIncome()}
				w="100%"
				leftIcon={<Icon as={IoIosAddCircleOutline} fontSize={25}/>}
				m={5}
			>
				Новый счёт
			</Button>
		</Center>
	);
};

export default Income;
