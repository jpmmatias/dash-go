import { Box, Flex, HStack, Icon, Input, Text, Avatar } from '@chakra-ui/react';
import {
	RiNotificationLine,
	RiSearchLine,
	RiUserAddLine,
} from 'react-icons/ri';

function Header() {
	return (
		<Flex
			w='100%'
			as='header'
			maxW='1400px'
			h='20'
			marginX='auto'
			mt='4'
			align='center'>
			<Text fontWeight='bold' fontSize='3xl' letterSpacing='tight' w='64'>
				dashgo
				<Text as='span' ml='1' color='pink.500'>
					.
				</Text>
			</Text>
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
			<Flex ml='auto' align='center'>
				<HStack
					spacing='8'
					mx='8'
					pr='8'
					py='1'
					color='gray.300'
					borderRightWidth='1px'
					borderColor='gray.700'>
					<Icon as={RiNotificationLine} fontSize='20' />
					<Icon as={RiUserAddLine} fontSize='20' />
				</HStack>
				<Flex align='center'>
					<Box mr='4' textAlign='right'>
						<Text>João Pedro Matias</Text>
						<Text color='gray.300' fontSize='small'>
							jpmmatias@gmail.com
						</Text>
					</Box>
					<Avatar size='md' name='João Pedro' src='src' />
				</Flex>
			</Flex>
		</Flex>
	);
}

export default Header;
