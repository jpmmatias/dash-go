import * as yup from 'yup';

export const SignInFormSchema = yup.object().shape({
	email: yup
		.string()
		.required('Email é obrigatório')
		.email('Campo de email precisa de um email valido'),
	password: yup
		.string()
		.required('Senha é obrigatória')
		.min(4, 'Senha precisa ter no minimo 4 caracteres'),
});

export const CreateUserFormSchema = yup.object().shape({
	email: yup
		.string()
		.required('Email é obrigatório')
		.email('Campo de email precisa de um email valido'),
	name: yup.string().required('Nome é obrigatório'),
	password: yup
		.string()
		.required('Senha é obrigatória')
		.min(4, 'Senha precisa ter no minimo 4 caracteres'),
	password_confirmation: yup
		.string()
		.oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});
