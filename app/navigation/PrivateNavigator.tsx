import { createStackNavigator } from '@react-navigation/stack';
import { FC } from 'react';

import Auth from '@/components/screens/auth/Auth';
import Screen404 from '@/components/screens/system/Screen404';

import { useAuth } from '@/hooks/useAuth';

import { TypeRootStackParamList } from './navigation.types';
import { routes, userRoutes } from './user.routes';

const Stack = createStackNavigator<TypeRootStackParamList>();

const PrivateNavigator: FC = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#090909',
        },
      }}
    >
      {user ? (
        user?.isAdmin ? (
          routes.map(route => <Stack.Screen key={route.name} {...route} />)
        ) : (
          userRoutes.map(route => <Stack.Screen key={route.name} {...route} />)
        )
      ) : (
        <Stack.Screen name="Auth" component={Auth} />
      )}
    </Stack.Navigator>
  );
};

export default PrivateNavigator;
