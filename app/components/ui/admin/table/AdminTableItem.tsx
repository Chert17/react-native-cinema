import cn from 'clsx';
import { FC } from 'react';
import { Text, View } from 'react-native';

import AdminActions from './AdminActions';
import { IAdminTableItem } from './admin-table.interface';

const AdminTableItem: FC<IAdminTableItem> = ({ removeHandler, tableItem }) => {
  return (
    <View className="flex-row items-center bg=[#151515] bg-opacity-20 mt-3 px-3 rounded-lg">
      {tableItem.items.map((value, index) => (
        <View
          className={cn('py-3 w-32 mx-2', {
            'justify-end': index === tableItem.items.length - 1,
          })}
        >
          <Text className="text-white text-base" numberOfLines={1}>
            {value}
          </Text>
        </View>
      ))}

      <AdminActions
        editNavigate={tableItem.editNavigate}
        removeHandler={removeHandler}
      />
    </View>
  );
};

export default AdminTableItem;
