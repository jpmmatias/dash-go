import { HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { IconBase } from 'react-icons';
import { RiNotificationLine, RiUserLine } from 'react-icons/ri';

type Props = {};

export default function NotificationsNav({}: Props) {
	return (
		<HStack
			spacing='8'
			mx='8'
			pr='8'
			py='1'
			color='gray.300'
			borderRightWidth='1px'
			borderColor='gray.700'>
			<Icon as={RiNotificationLine} fontSize='20' />
			<IconBase as={RiUserLine} fontSize='20' />
		</HStack>
	);
}
