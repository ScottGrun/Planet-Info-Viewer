import { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyles";
import Background from "../components/Background/Background";
export default function App({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Background />
				<Component {...pageProps} key={router.query.name} />
			</ThemeProvider>
		</>
	);
}
