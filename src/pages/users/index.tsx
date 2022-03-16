import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine, RiPercentLine } from 'react-icons/ri';
import { Header, Sidebar, Pagination } from '../../components';
import { useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';

type Props = {};

const UserList = (props: Props) => {
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
							<Tr>
								<Td px={['4', '4', '6']}>
									<Checkbox colorScheme='pink' />
								</Td>
								<Td>
									<Box>
										<Text fontWeight='bold'>João Pedro Matias</Text>
										<Text fontSize='sm' color='gray.400' fontWeight='light'>
											jpmmatias@gmail.com
										</Text>
									</Box>
								</Td>
								{isWideVersion && <Td>04 de Abril de 2022</Td>}
								<Td pl={{ base: '', lg: '13%' }}>
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
						</Tbody>
					</Table>
					<Pagination />
				</Box>
			</Flex>
		</Box>
	);
};

export default UserList;
