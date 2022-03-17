import { useQuery } from 'react-query';
import { api } from '../axios';

interface UserData {
	name: string;
	email: string;
	createdAt: string;
	id: string | number;
}

interface getUsersData {
	users: UserData[];
	totalCount: number;
}

interface Data {
	users: UserData[];
}

async function getUsers(page: number): Promise<getUsersData> {
	const { data, headers } = await api.get<Data>('users', {
		params: {
			page,
		},
	});

	const totalCount = Number(headers['x-total-count']);

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

	return { users, totalCount };
}

export function useUsers(page: number) {
	const { data, isLoading, error, isFetching } = useQuery(
		['users', page],
		() => getUsers(page),
		{
			staleTime: 1000 * 5, // 5 seconds
		}
	);

	return {
		data,
		isLoading,
		error,
		isFetching,
	};
}
