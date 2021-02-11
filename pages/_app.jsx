import { AuthProvider } from "@/lib/auth";
import customTheme from "@/styles/theme";
import { CSSReset, ThemeProvider } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";

const GlobalStyle = ({ children }) => {
	return (
		<>
			<CSSReset />
			<Global
				styles={css`
					html {
						min-width: 360px;
						scroll-behavior: smooth;
					}
					#__next {
						display: flex;
						flex-direction: column;
						min-height: 100vh;
					}
				`}
			/>
			{children}
		</>
	);
};

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={customTheme}>
			<AuthProvider>
				<GlobalStyle />
				<Component {...pageProps} />
			</AuthProvider>
		</ThemeProvider>
	);
}

export default MyApp;
