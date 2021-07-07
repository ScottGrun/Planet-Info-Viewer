import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/globalStyles';
import Navbar from '../components/Navbar/Navbar';
export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={lightTheme}>
				<Navbar/>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
