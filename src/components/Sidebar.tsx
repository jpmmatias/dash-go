import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine,
} from 'react-icons/ri';

type Props = {};

export default function Sidebar({}: Props) {
	return (
		<Box as='aside' w='64' mr='8'>
			<Stack spacing='12' align='flex-start'>
				<Box>
					<Text fontWeight='bold' color='gray.400' fontSize='samll'>
						GERAL
					</Text>
					<Stack spacing='4' mt='8' align='stretch'>
						<Link display='flex' alignItems='center' href='/dashboard'>
							<Icon as={RiDashboardLine} fontSize='20' />
							<Text fontWeight='medium' ml='4'>
								Dashboard
							</Text>
						</Link>
						<Link display='flex' alignItems='center' href='/users'>
							<Icon as={RiContactsLine} fontSize='20' />
							<Text fontWeight='medium' ml='4'>
								Usuários
							</Text>
						</Link>
					</Stack>
				</Box>
				<Box>
					<Text fontWeight='bold' color='gray.400' fontSize='samll'>
						AUTOMAÇÃO
					</Text>
					<Stack spacing='4' mt='8' align='stretch'>
						<Link display='flex' alignItems='center' href='/dashboard'>
							<Icon as={RiInputMethodLine} fontSize='20' />
							<Text fontWeight='medium' ml='4'>
								Formulários
							</Text>
						</Link>
						<Link display='flex' alignItems='center' href='/users'>
							<Icon as={RiGitMergeLine} fontSize='20' />
							<Text fontWeight='medium' ml='4'>
								Automação
							</Text>
						</Link>
					</Stack>
				</Box>
			</Stack>
		</Box>
	);
}
