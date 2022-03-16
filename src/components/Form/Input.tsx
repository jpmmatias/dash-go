import {
	FormLabel,
	Input as ChakraInput,
	FormControl,
	InputProps as ChakaraInputProps,
	FormErrorMessage,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakaraInputProps {
	name: string;
	error: FieldError;
	label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, label, error, ...rest },
	ref
) => {
	return (
		<FormControl isInvalid={!!error}>
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
				ref={ref}
				{...rest}
			/>
			{!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
		</FormControl>
	);
};

export const Input = forwardRef(InputBase);
