import { useQuery } from '@tanstack/react-query';

import { MovieService } from '@/service/movie.service';

export const useTrending = () => {
  const { isLoading, data: movies } = useQuery(['get trending movie'], () =>
    MovieService.getMostPopularMovies()
  );

  return { movies, isLoading };
};
