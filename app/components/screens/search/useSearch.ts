import { useQuery } from '@tanstack/react-query';

import { useSearchForm } from './useSearchForm';
import { MovieService } from '@/service/movie.service';

export const useSearch = () => {
  const { control, debouncedSearch, searchTerm } = useSearchForm();

  const { data: movies, isLoading } = useQuery(
    ['search movies', debouncedSearch],
    () => MovieService.getAll(debouncedSearch),
    { enabled: !!debouncedSearch }
  );

  return { movies, isLoading, control, searchTerm };
};
