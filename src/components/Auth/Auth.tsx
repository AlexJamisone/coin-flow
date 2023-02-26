import { Center, Button, Image, Stack } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import User from "../User/User";

const Auth = () => {
	const { data: session } = useSession();
	return (
		<Center>
			{session ? (
				<Stack alignItems='center'>
					<User />
					<Button onClick={() => signOut()}>Выйти</Button>
				</Stack>
			) : (
				<Button
					onClick={() => signIn("google")}
					leftIcon={
						<Image
							height="20px"
							src="/assets/logo/googlelogo.png"
							alt="google logo"
						/>
					}
				>
					Continium with Google
				</Button>
			)}
		</Center>
	);
};

export default Auth;
