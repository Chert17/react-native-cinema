import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { ScrollView } from 'react-native';

import { AdminNavigation, Layout } from '@/components/ui';

import Statistics from './statistics/Statistics';

const Admin: FC = () => {
  return (
    <Layout isHasPadding>
      <AdminNavigation title="Statistics" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Statistics />
      </ScrollView>
    </Layout>
  );
};

export default Admin;
