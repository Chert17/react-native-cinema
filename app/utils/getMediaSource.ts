import { ImageSourcePropType } from 'react-native';

import { SERVER_URL } from '@/config/api.config';

export const getMediaSource = (uri: string): ImageSourcePropType => ({
  uri: SERVER_URL + uri,
});
