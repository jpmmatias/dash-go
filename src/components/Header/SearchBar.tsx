import { Flex, Icon, Input } from '@chakra-ui/react';
import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

type Props = {};

function SearchBar({}: Props) {
	return (
		<Flex
			py='4'
			px='8'
			ml='6'
			maxWidth='400'
			align='center'
			color='gray.200'
			bg='gray.800'
			borderRadius='full'
			flex='1'
			as='label'>
			<Input
				color='gray.50'
				variant='unstyled'
				placeholder='Buscar na plataforma'
				px='4'
				mr='4'
				_placeholder={{
					color: 'gray.400',
				}}
			/>
			<Icon fontSize='20' as={RiSearchLine} color='pink.500' />
		</Flex>
	);
}

export default SearchBar;
