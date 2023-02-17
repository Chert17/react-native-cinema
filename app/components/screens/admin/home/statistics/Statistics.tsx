import { FC } from 'react';
import { View } from 'react-native';

import CountUsers from './CountUsers';
import PopularMovies from './PopularMovies';

const Statistics: FC = () => {
  return (
    <View>
      <CountUsers />
      <PopularMovies />
    </View>
  );
};

export default Statistics;
