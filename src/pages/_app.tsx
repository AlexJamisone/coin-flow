import type { AppProps } from "next/app";
import {
	ChakraProvider,
	Grid,
	GridItem,
	ColorModeScript,
} from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import Navigation from "../components/Navigation/Navigation";
import Menu from "../components/Menu/Menu";
import { GetServerSidePropsContext } from "next";
import { getSession, SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<ChakraProvider theme={theme}>
				<ColorModeScript
					initialColorMode={theme.config.initialColorMode}
				/>
				<Grid
					templateAreas={`"main" "navigation"
			`}
					gridTemplateRows={"1fr auto"}
					minH="100vh"
				>
					<GridItem>
						<Menu />
						<Component {...pageProps} />
					</GridItem>
					<GridItem>
						<Navigation />
					</GridItem>
				</Grid>
			</ChakraProvider>
		</SessionProvider>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getSession(context);

	return {
		props: {
			session,
		},
	};
}

export default MyApp;
