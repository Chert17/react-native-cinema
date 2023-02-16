import { FC } from 'react';
import { View } from 'react-native';

import {
  DismissKeyboard,
  Field,
  Heading,
  Layout,
  Loader,
  MovieCatalog,
} from '@/components/ui';

import { ISearchFormData } from './search.interface';
import { useSearch } from './useSearch';

const Search: FC = () => {
  const { searchTerm, control, isLoading, movies } = useSearch();

  return (
    <Layout isHasPadding>
      <DismissKeyboard>
        <Heading title="Search" />
        <View className="mt-3">
          <Field<ISearchFormData>
            control={control}
            name="searchTerm"
            placeholder="Type something..."
            keyboardType="web-search"
          />
        </View>
        {!!searchTerm ? (
          <View className="mt-3">
            {isLoading ? <Loader /> : <MovieCatalog title="" movies={movies} />}
          </View>
        ) : null}
      </DismissKeyboard>
    </Layout>
  );
};

export default Search;
