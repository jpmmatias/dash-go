import { Button, Flex, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../components/Form/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInFormSchema } from '../utils/validations';

interface SignInData {
	email: string;
	password: string;
}

export default function Home() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(SignInFormSchema),
	});

	const { errors, isSubmitting } = formState;

	const handleSignIn: SubmitHandler<SignInData> = async (values, event) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
	};

	return (
		<Flex w='100vw' h='100vh' alignItems='center' justifyContent='center'>
			<Flex
				as='form'
				width='100%'
				maxWidth={360}
				bg='gray.800'
				padding='8'
				borderRadius='8'
				onSubmit={handleSubmit(handleSignIn)}
				flexDir='column'>
				<Stack spacing='4'>
					<Input
						name='email'
						type='email'
						label='E-mail'
						error={errors.email}
						{...register('email')}
					/>
					<Input
						{...register('password')}
						name='password'
						type='password'
						label='Senha'
						error={errors.password}
					/>
				</Stack>
				<Button
					isLoading={isSubmitting}
					size='lg'
					type='submit'
					mt='6'
					colorScheme='pink'>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
}
