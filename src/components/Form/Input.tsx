import {
	FormLabel,
	Input as ChakraInput,
	FormControl,
	InputProps as ChakaraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakaraInputProps {
	name: string;
	label?: string;
}

function Input({ name, label, ...rest }: InputProps) {
	return (
		<FormControl>
			{!!label && (
				<FormLabel marginBottom='1.5' htmlFor={name}>
					{label}
				</FormLabel>
			)}
			<ChakraInput
				id={name}
				name={name}
				focusBorderColor='pink.500'
				bgColor='gray.900'
				variant='filled'
				_hover={{
					bgColor: 'gray.900',
				}}
				size='lg'
				{...rest}
			/>
		</FormControl>
	);
}

export default Input;
