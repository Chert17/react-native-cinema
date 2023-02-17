import { useQuery } from '@tanstack/react-query';

import { useTypedRoute } from '@/hooks/useTypedRoute';

import { IActor } from '@/shared/types/actor.interface';

import { ActorService } from '@/service/actor.service';
import { MovieService } from '@/service/movie.service';

export const useActor = () => {
  const { params } = useTypedRoute<'Actor'>();

  const { data: actor, isLoading } = useQuery(
    ['get actor by slug', params.slug],
    () => ActorService.getBySlug(params?.slug)
  );

  const actorId = actor?._id || '';

  const { data: movies, isLoading: isMovieLoading } = useQuery(
    ['get movies by actor ', actor?._id],
    () => MovieService.getByActor(actorId),
    { enabled: !!actorId }
  );

  return { actor, movies, isLoading: isLoading || isMovieLoading };
};
