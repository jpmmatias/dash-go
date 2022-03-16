import { Link as ChakraLink, Icon, Text, LinkProps } from '@chakra-ui/react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import ActiveLink from '../ActiveLink';

interface Props extends LinkProps {
	icon: IconType;
	children: string;
	href: string;
}

function NavLink({ icon, children, href, ...rest }: Props) {
	return (
		<ActiveLink passHref href={href}>
			<ChakraLink display='flex' alignItems='center' {...rest}>
				<Icon as={icon} fontSize='20' />
				<Text fontWeight='medium' ml='4'>
					{children}
				</Text>
			</ChakraLink>
		</ActiveLink>
	);
}

export default NavLink;
