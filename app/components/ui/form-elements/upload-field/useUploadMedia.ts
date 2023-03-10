import { useMutation } from '@tanstack/react-query';
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';
import { useCallback, useMemo, useState } from 'react';

import { TypeUploadMedia } from './upload-field.interface';
import { MediaService } from '@/service/media.service';

export const useUploadMedia: TypeUploadMedia = (onChange, folder) => {
  const [isLoading, setIsLoading] = useState(false);

  const { mutateAsync } = useMutation(
    ['upload file'],
    (data: FormData) => MediaService.upload(data, folder),
    {
      onSuccess(data) {
        onChange(data[0].url);
      },
    }
  );

  const uploadFile = useCallback(async () => {
    setIsLoading(true);

    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (result.canceled) {
      setIsLoading(false);
      return;
    }

    const localUri = result.assets.join('');
    const filename = localUri.split('/').pop() || '';

    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;

    const formData = new FormData();
    formData.append('file', {
      uri: localUri,
      name: filename,
      type,
    } as unknown as Blob);

    await mutateAsync(formData);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [mutateAsync]);

  return useMemo(() => ({ isLoading, uploadFile }), [uploadFile, isLoading]);
};
