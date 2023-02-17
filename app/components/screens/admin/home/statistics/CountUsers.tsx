import { useQuery } from '@tanstack/react-query/build/lib/useQuery';
import { FC } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import { Loader } from '@/components/ui';

import { useScaleOnMount } from '@/hooks/useScaleOnMount';

import { AdminService } from '@/service/admin.service';

const CountUsers: FC = () => {
  const { data, isLoading } = useQuery(['get count users'], () =>
    AdminService.getCountUsers()
  );

  const { styleAnimation } = useScaleOnMount();

  return (
    <View className="items-center justify-center text-center w-full border-2 border-gray-500 rounded-2xl p-5">
      {isLoading ? (
        <Loader />
      ) : (
        <Animated.Text
          className="text-7xl mb-1 font-medium text-white"
          style={styleAnimation}
        >
          {data}
        </Animated.Text>
      )}

      <Animated.Text
        className="opacity-70 text-xl text-white"
        style={styleAnimation}
      >
        users
      </Animated.Text>
    </View>
  );
};

export default CountUsers;
