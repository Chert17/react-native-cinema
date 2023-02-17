import { SERVER_URL } from '@/config/api.config';

export const getMediaSource = (uri: string) => ({
  uri: SERVER_URL + uri,
});
