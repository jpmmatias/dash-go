import { ReactNode } from 'react';
import { Box, Text, Stack, Link, Icon } from '@chakra-ui/react';

type Props = {
	title: string;
	children: ReactNode;
};

function NavSection({ title, children }: Props) {
	return (
		<Box>
			<Text fontWeight='bold' color='gray.400' fontSize='samll'>
				{title}
			</Text>
			<Stack spacing='4' mt='8' align='stretch'>
				{children}
			</Stack>
		</Box>
	);
}

export default NavSection;
