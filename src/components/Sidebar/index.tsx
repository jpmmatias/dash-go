import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from 'react-icons/ri';
import NavLink from './NavLink';
import NavSection from './NavSection';

type Props = {};

export default function Sidebar({}: Props) {
	return (
		<Box as='aside' w='64' mr='8'>
			<Stack spacing='12' align='flex-start'>
				<NavSection title='GERAL'>
					<NavLink icon={RiDashboardLine} href='/dashboard'>
						Dashboard
					</NavLink>
					<NavLink icon={RiContactsLine} href='/users'>
						Usuários
					</NavLink>
				</NavSection>
				<NavSection title='Automação'>
					<NavLink icon={RiInputMethodLine} href='/dashboard'>
						Formulários
					</NavLink>
					<NavLink icon={RiGitMergeLine} href='/users'>
						Automação
					</NavLink>
				</NavSection>
			</Stack>
		</Box>
	);
}
