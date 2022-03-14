import { Link, Icon, Text, LinkProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props extends LinkProps {
	icon: IconType;
	children: string;
}

function NavLink({ icon, children, ...rest }: Props) {
	return (
		<Link display='flex' alignItems='center' {...rest}>
			<Icon as={icon} fontSize='20' />
			<Text fontWeight='medium' ml='4'>
				{children}
			</Text>
		</Link>
	);
}

export default NavLink;
