import { Stack } from '@chakra-ui/react';
import NavLink from './NavLink';
import NavSection from './NavSection';
import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from 'react-icons/ri';

type Props = {};

function SidebarNav({}: Props) {
	return (
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
				<NavLink icon={RiInputMethodLine} href='/forms'>
					Formulários
				</NavLink>
				<NavLink icon={RiGitMergeLine} href='/merge'>
					Automação
				</NavLink>
			</NavSection>
		</Stack>
	);
}

export default SidebarNav;
