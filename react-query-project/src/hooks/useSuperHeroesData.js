import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const urlSuperHeroes = 'http://localhost:4000/superheroes';

const fetchSuperHeroes = () => {
  return axios.get(urlSuperHeroes);
};

const addSuperHero = (hero) => {
  return axios.post(urlSuperHeroes, hero);
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
    onSuccess: onSuccess,
    onError: onError,
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: () => {
      queryClient.invalidateQueries('super-heroes');
    },
  });
};
