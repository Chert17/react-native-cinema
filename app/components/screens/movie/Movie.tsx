import { FC, useRef } from 'react';
import { Animated } from 'react-native';

import { Layout, Loader } from '@/components/ui';

import MovieBackground from './MovieBackground';
import MovieHeader from './MovieHeader';
import MovieContent from './movie-content/MovieContent';
import { useMovie } from './useMovie';
import { useUpdateCountOpened } from './useUpdateCountOpened';

const Movie: FC = () => {
  const { movie, isLoading } = useMovie();

  const y = useRef(new Animated.Value(0)).current;

  useUpdateCountOpened();

  if (isLoading) return <Loader />;
  if (!movie) return null;

  return (
    <Layout style={{ paddingTop: 0 }}>
      <MovieHeader movie={movie} y={y} />
      <MovieBackground movie={movie} y={y} />
      <MovieContent movie={movie} y={y} />
    </Layout>
  );
};

export default Movie;
