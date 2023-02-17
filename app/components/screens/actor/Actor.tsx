import { FC } from 'react';

import { Layout, Loader, MovieCatalog, NotFound } from '@/components/ui';

import { useActor } from './useActor';

const Actor: FC = () => {
  const { movies, actor, isLoading } = useActor();

  if (isLoading) return <Loader />;

  return (
    <Layout isHasPadding>
      {actor ? (
        <MovieCatalog movies={movies} title={actor.name} isBackButton />
      ) : (
        <NotFound />
      )}
    </Layout>
  );
};

export default Actor;
