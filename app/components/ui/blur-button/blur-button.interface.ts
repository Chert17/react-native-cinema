import { PressableProps, ViewStyle } from 'react-native';

import { TypeFeatherIconNames } from '@/shared/types/icon.types';

export interface IBLurButton extends PressableProps {
  style?: ViewStyle;
  icon?: TypeFeatherIconNames;
  iconSize?: number;
  color?: string;
  isSmall?: boolean;
}
