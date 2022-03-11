import { Button, Flex, FormLabel, Stack, FormControl } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Input from '../components/Form/Input';

export default function Home() {
	return (
		<Flex w='100vw' h='100vh' alignItems='center' justifyContent='center'>
			<Flex
				as='form'
				width='100%'
				maxWidth={360}
				bg='gray.800'
				padding='8'
				borderRadius='8'
				flexDir='column'>
				<Stack spacing='4'>
					<Input name='email' type='email' label='E-mail' />
					<Input name='password' type='password' label='Senha' />
				</Stack>
				<Button size='lg' type='submit' mt='6' colorScheme='pink'>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
}
