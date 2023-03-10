import { Feather } from '@expo/vector-icons';
import cn from 'clsx';
import { LinearGradient } from 'expo-linear-gradient';
import { FC, PropsWithChildren } from 'react';
import { Pressable, Text } from 'react-native';

import { IButton } from './button.interface';

const Button: FC<PropsWithChildren<IButton>> = ({
  className,
  icon,
  children,
  ...rest
}) => {
  return (
    <Pressable className={cn(' mt-3.5 w-7/12 mx-auto', className)} {...rest}>
      <LinearGradient
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0.25 }}
        className={cn(
          'w-full py-3 px-8 rounded-2xl items-center justify-center',
          {
            'flex-row': !!icon,
          }
        )}
        colors={['#dc3f41', '#a6282b']}
      >
        {icon && <Feather name={icon} color="white" size={18} />}
        <Text
          className={cn('text-white text-center font-medium text-lg', {
            'ml-2': !!icon,
          })}
        >
          {children}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Button;
