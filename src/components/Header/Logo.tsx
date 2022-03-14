import { Text } from '@chakra-ui/react';
import React from 'react';

type Props = {};

function Logo({}: Props) {
	return (
		<Text fontWeight='bold' fontSize='3xl' letterSpacing='tight' w='64'>
			dashgo
			<Text as='span' ml='1' color='pink.500'>
				.
			</Text>
		</Text>
	);
}

export default Logo;
