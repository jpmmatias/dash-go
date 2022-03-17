import { useQuery } from 'react-query';
import { api } from '../axios';

interface UserData {
	name: string;
	email: string;
	createdAt: string;
	id: string | number;
}

async function getUsers(): Promise<UserData[]> {
	const response = await api.get('users');
	const users = response.data.users.map((user: UserData) => ({
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
}

export function useUsers() {
	const { data, isLoading, error, isFetching } = useQuery('users', getUsers, {
		staleTime: 1000 * 5, // 5 seconds
	});

	const users = data;

	return { users, isLoading, error, isFetching };
}
