import { Button } from '@chakra-ui/react';

type Props = {
	isCurrent?: boolean;
	number: number | string;
};

function PaginationItem({ isCurrent, number }: Props) {
	if (isCurrent) {
		return (
			<Button
				size='sm'
				fontSize='xs'
				width='4'
				colorScheme='4'
				disabled
				_disabled={{
					bgColor: 'pink.500',
					cursor: 'default',
				}}>
				{number}
			</Button>
		);
	}
	return (
		<Button
			size='sm'
			fontSize='xs'
			width='4'
			bg='gray.700'
			_hover={{ bg: 'gray.500' }}>
			{number}
		</Button>
	);
}

export default PaginationItem;
