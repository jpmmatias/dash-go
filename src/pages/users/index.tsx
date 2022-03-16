import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Spinner,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header, Sidebar, Pagination } from '../../components';
import { useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useQuery } from 'react-query';

interface UserData {
	name: string;
	email: string;
	createdAt: string;
	id: string | number;
}

type Props = {};

const UserList = (props: Props) => {
	const { data, isLoading, error, isFetching } = useQuery(
		'users',
		async () => {
			const response = await fetch('http://localhost:3000/api/users');
			const data = await response.json();
			const users = data.users.map((user: UserData) => ({
				id: user.id,
				name: user.name,
				email: user.email,
				createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
					day: '2-digit',
					month: 'long',
					year: 'numeric',
				}),
			}));
			return users;
		},
		{
			staleTime: 1000 * 5, // 5 seconds
		}
	);

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Box>
			<Header />
			<Flex w='100%' my='6' maxWidth={1480} mx='auto'>
				<Sidebar />
				<Box flex='1' borderRadius={8} bg='gray.800' p='8'>
					<Flex mb='8' justify='space-between' align='center'>
						<Heading size='lg' fontWeight='normal'>
							Usuários
							{isFetching && !isLoading && (
								<Spinner size='sm' color='gray.500' ml='3' />
							)}
						</Heading>
						<Link passHref href='/users/create'>
							<Button
								size='sm'
								fontSize='sm'
								colorScheme='pink'
								leftIcon={<Icon as={RiAddLine} fontSize='20' />}
								as='a'>
								Criar usuário
							</Button>
						</Link>
					</Flex>
					{isLoading ? (
						<Flex align='center' justify='center'>
							<Spinner color='pink.400' />
						</Flex>
					) : error ? (
						<Flex align='center' justify='center'>
							<Text>Falha no servidor</Text>
						</Flex>
					) : (
						<>
							<Table colorScheme='whiteAlpha'>
								<Thead>
									<Tr>
										<Th px={['4', '4', '6']} color='gray.300' width='8'>
											<Checkbox colorScheme='pink'></Checkbox>
										</Th>
										<Th px='6' color='gray.300' width='8'>
											Usuário
										</Th>
										{isWideVersion && (
											<Th px={['4', '4', '6']} color='gray.300' width='8'>
												Data de cadastro
											</Th>
										)}
										<Th width='8'></Th>
									</Tr>
								</Thead>
								<Tbody>
									{data.map((user: UserData) => (
										<Tr key={user.id}>
											<Td px={['4', '4', '6']}>
												<Checkbox colorScheme='pink' />
											</Td>
											<Td>
												<Box>
													<Text fontWeight='bold'>{user.name}</Text>
													<Text
														fontSize='sm'
														color='gray.400'
														fontWeight='light'>
														{user.email}
													</Text>
												</Box>
											</Td>
											{isWideVersion && <Td>{user.createdAt}</Td>}
											<Td pl={{ base: '', lg: '8%' }}>
												{isWideVersion ? (
													<Button
														role='button'
														size='sm'
														fontSize='sm'
														colorScheme='purple'
														leftIcon={<Icon as={RiPencilLine} fontSize='20' />}
														as='a'>
														Editar
													</Button>
												) : (
													<Button
														role='button'
														size='sm'
														fontSize='sm'
														colorScheme='purple'
														as='a'>
														<Icon as={RiPencilLine} fontSize='20' />
													</Button>
												)}
											</Td>
										</Tr>
									))}
								</Tbody>
							</Table>
							<Pagination />
						</>
					)}
				</Box>
			</Flex>
		</Box>
	);
};

export default UserList;
