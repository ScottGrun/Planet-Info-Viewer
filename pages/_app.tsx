import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/globalStyle";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { IdProvider } from "@radix-ui/react-id";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IdProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.query.name} />
        </AnimatePresence>
      </IdProvider>
    </ThemeProvider>
  );
}
export default MyApp;
