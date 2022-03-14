import { Box, Flex, HStack, Icon, Input, Text, Avatar } from '@chakra-ui/react';
import {
	RiNotificationLine,
	RiSearchLine,
	RiUserAddLine,
} from 'react-icons/ri';
import Logo from './Logo';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile';
import SearchBar from './SearchBar';

function Header() {
	return (
		<Flex
			w='100%'
			as='header'
			maxW='1400px'
			h='20'
			marginX='auto'
			mt='4'
			align='center'>
			<Logo />
			<SearchBar />
			<Flex ml='auto' align='center'>
				<NotificationsNav />
				<Profile />
			</Flex>
		</Flex>
	);
}

export default Header;
