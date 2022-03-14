import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { Sidebar, Header, Chart } from '../components';

export default function Dashboard() {
	return (
		<Flex direction='column' h='100vh'>
			<Header />
			<Flex w='100%' my='6' maxWidth={1480} mx='auto'>
				<Sidebar />
				<SimpleGrid
					flex='1'
					gap='4'
					minChildWidth='320px'
					alignItems='flex-start'>
					<Chart title='Inscritos da semana' />
					<Chart title='Taxa de abertura' />
				</SimpleGrid>
			</Flex>
		</Flex>
	);
}
