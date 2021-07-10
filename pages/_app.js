import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyles";
import Navbar from "../components/Navbar/Navbar";
import Background from "../components/Background/Background";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Background />
        <Navbar />
          <Component {...pageProps} key={router.query.name} />
      </ThemeProvider>
    </>
  );
}
