import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	ModalFooter,
	FormControl,
	FormLabel,
	Input,
	Button,
	Select,
	Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface IncomeModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const IncomeModal = ({ isOpen, onClose }: IncomeModalProps) => {
	const [curr, setCurr] = useState([]);
	useEffect(() => {
		const currency = async () => {
			try {
				const response = await fetch("api/currency/codes");
				const data = await response.json();
				setCurr(data.supported_codes);
			} catch (error) {
				console.log(error);
			}
		};
		currency();
	}, []);
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Новый счёт</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<FormControl>
						<FormLabel>Название счёта</FormLabel>
						<Input type="text" />
					</FormControl>
					<Select>
						{curr.map((value: string[]) => (
							<option key={value[0]} value={value[0]}>
								{`${value[0]} - ${value[1]}`}
							</option>
						))}
					</Select>
				</ModalBody>
				<ModalFooter display="flex" justifyContent="space-between">
					<Button>Сохранить</Button>
					<Button>Отмена</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default IncomeModal;
