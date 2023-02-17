import { useQuery } from '@tanstack/react-query';

import { MovieService } from '@/service/movie.service';

export const useTrending = (limit?: number) => {
  const { isLoading, data: movies } = useQuery(
    ['get trending movie'],
    () => MovieService.getMostPopularMovies(),
    { select: data => (limit ? data.slice(0, limit) : data) }
  );

  return { movies, isLoading };
};
