import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { SiderbarDraerProvider } from '../contexts/SidebarDrawerContext';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<SiderbarDraerProvider>
				<Component {...pageProps} />
			</SiderbarDraerProvider>
		</ChakraProvider>
	);
}

export default MyApp;
