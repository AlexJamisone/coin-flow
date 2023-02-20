import type { AppProps } from "next/app";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import Navigation from "../components/Navigation/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Grid
				templateAreas={`"main" "navigation"
			`}
			gridTemplateRows={'1fr auto'}
			minH='100vh'
			>
				<GridItem>
					<Component {...pageProps} />
				</GridItem>
				<GridItem>
					<Navigation />
				</GridItem>
			</Grid>
		</ChakraProvider>
	);
}

export default MyApp;
