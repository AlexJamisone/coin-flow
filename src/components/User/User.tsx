import { Avatar, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
const User = () => {
	const { data: session } = useSession();
	return (
		<>
			<Avatar
				name={session?.user?.name as string}
				src={session?.user?.image as string}
			/>
			<Text>Привет, {session?.user?.name}!</Text>
		</>
	);
};

export default User;
