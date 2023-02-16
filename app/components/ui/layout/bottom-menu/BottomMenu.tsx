import { FC } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MenuItem from './MenuItem';
import { menuItems } from './menu.data';
import { TypeNavigate } from './menu.interface';

interface IBottomMenu {
  nav: TypeNavigate;
  currentRoute?: string;
}

const BottomMenu: FC<IBottomMenu> = ({ nav, currentRoute }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      className="pt-3 px-2  flex-row justify-between items-center w-full border-t  border-t-[#929292] bg-[#090909]"
      style={{
        paddingBottom: bottom + 12,
      }}
    >
      {menuItems.map(item => (
        <MenuItem
          key={item.path}
          item={item}
          nav={nav}
          currentRoute={currentRoute}
        />
      ))}
    </View>
  );
};

export default BottomMenu;
