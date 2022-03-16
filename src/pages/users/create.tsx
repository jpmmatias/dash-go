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
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Header, Input, Sidebar } from '../../components';
import { CreateUserFormSchema } from '../../utils/validations';

interface CreateUserFormData {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

type Props = {};

function CreateUser({}: Props) {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(CreateUserFormSchema),
		reValidateMode: 'onSubmit',
	});

	const { errors, isSubmitting } = formState;

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
		values,
		event
	) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log('a');
	};

	return (
		<Box>
			<Header />
			<Flex w='100%' my='6' maxWidth={1480} mx='auto'>
				<Sidebar />
				<Box
					onSubmit={handleSubmit(handleCreateUser)}
					as='form'
					flex='1'
					borderRadius={8}
					bg='gray.800'
					p={['6', '8']}>
					<Heading size='lg' fontWeight='normal'>
						Criar usuário
					</Heading>
					<Divider my='6' borderColor='gray.700'></Divider>
					<VStack spacing={['6', '8']}>
						<SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
							<Input
								name='name'
								label='Nome completo'
								error={errors.name}
								{...register('name')}
							/>
							<Input
								name='email'
								type='email'
								label='E-mail'
								{...register('email')}
								error={errors.email}
							/>
						</SimpleGrid>
						<SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
							<Input
								name='password'
								label='Senha'
								type='password'
								error={errors.password}
								{...register('password')}
							/>
							<Input
								name='password_confirmation'
								type='password'
								label='Confirmar Senha'
								error={errors.password_confirmation}
								{...register('password_confirmation')}
							/>
						</SimpleGrid>
					</VStack>
					<Flex mt='8' justify='flex-end'>
						<HStack spacing='4'>
							<Link href='/users' passHref>
								<Button as='a' role='button' colorScheme='whiteAlpha'>
									Cancelar
								</Button>
							</Link>
							<Button type='submit' isLoading={isSubmitting} colorScheme='pink'>
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}

export default CreateUser;
