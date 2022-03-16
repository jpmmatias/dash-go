import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import Logo from './Logo';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile';
import SearchBar from './SearchBar';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

function Header() {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	const { onOpen } = useSidebarDrawer();

	return (
		<Flex
			w='100%'
			as='header'
			maxW='1400px'
			h='20'
			marginX='auto'
			mt='4'
			align='center'>
			{!isWideVersion && (
				<IconButton
					fontSize='24'
					variant='unstyled'
					onClick={onOpen}
					aria-label='Abre Navegação'
					icon={<Icon as={RiMenuLine} />}
				/>
			)}
			<Logo />
			{isWideVersion && <SearchBar />}
			<Flex ml='auto' align='center'>
				<NotificationsNav />
				<Profile showProfileDetails={isWideVersion} />
			</Flex>
		</Flex>
	);
}

export default Header;
