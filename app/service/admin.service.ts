import { getUsersUrl } from '@/config/api.config';

import { request } from './api/request.api';

export const AdminService = {
  async getCountUsers() {
    return request<string>({
      url: getUsersUrl('/count'),
      method: 'GET',
    });
  },
};
