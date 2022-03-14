import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Header, Input, Sidebar } from '../../components';

type Props = {};

function CreateUser({}: Props) {
	return (
		<Box>
			<Header />
			<Flex w='100%' my='6' maxWidth={1480} mx='auto'>
				<Sidebar />
				<Box flex='1' borderRadius={8} bg='gray.800' p='8'>
					<Heading size='lg' fontWeight='normal'>
						Criar usuário
					</Heading>
					<Divider my='6' borderColor='gray.700'></Divider>
					<VStack spacing='8'>
						<SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
							<Input name='name' label='Nome completo' />
							<Input name='Email' type='email' label='E-mail' />
						</SimpleGrid>
						<SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
							<Input name='password' label='Senha' type='password' />
							<Input
								name='password_confirmation'
								type='password'
								label='Confirmar Senha'
							/>
						</SimpleGrid>
					</VStack>
					<Flex mt='8' justify='flex-end'>
						<HStack spacing='4'>
							<Button colorScheme='whiteAlpha'>Cancelar</Button>
							<Button colorScheme='pink'>Salvar</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}

export default CreateUser;
