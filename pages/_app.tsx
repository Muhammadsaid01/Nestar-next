import { ApolloProvider } from '@apollo/client';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { appWithTranslation } from 'next-i18next'; //@ts-ignore
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { useApollo } from '../apollo/client'; // @ts-ignore
import '../scss/app.scss';
import { light } from '../scss/MaterialTheme'; // @ts-ignore
import '../scss/mobile/main.scss'; // @ts-ignore
import '../scss/pc/main.scss';

const App = ({ Component, pageProps }: AppProps) => {
	// @ts-ignore
	const [theme, setTheme] = useState(createTheme(light));
	const client = useApollo(pageProps.initialApolloState);

	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</ApolloProvider>
	);
};

export default appWithTranslation(App);
