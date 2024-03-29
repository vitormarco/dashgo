import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { api } from '../api';

type UserType = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: Array<UserType>;
};

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get('/users/', {
    params: {
      page,
    },
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map((user: UserType) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return { users, totalCount };
};

export const useUsers = (page: number) => {
  return useQuery(['users', page], () => getUsers(page));
};
