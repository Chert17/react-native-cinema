import { FC } from 'react';

import { Layout, Loader } from '@/components/ui';

import Carousel from './carousel/Carousel';
import { useGetAllMovies } from './useGetAllMovies';

const Home: FC = () => {
  const { movies, isLoading } = useGetAllMovies();

  return (
    <Layout>
      {isLoading ? <Loader /> : movies?.length && <Carousel movies={movies} />}
    </Layout>
  );
};

export default Home;
