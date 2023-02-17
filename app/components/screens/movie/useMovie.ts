import { useQuery } from '@tanstack/react-query';

import { useTypedRoute } from '@/hooks/useTypedRoute';

import { MovieService } from '@/service/movie.service';

export const useMovie = () => {
  const { params } = useTypedRoute<'Movie'>();

  const { isLoading, data: movie } = useQuery(['get movie by slug'], () =>
    MovieService.getBySlug(params.slug)
  );

  return { movie, isLoading };
};
