import { useMutation, useQuery } from '@tanstack/react-query';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

import { IAuthFormData } from '@/shared/types/auth.interface';

import { UserService } from '@/service/user.service';

export const useProfile = (setValue: UseFormSetValue<IAuthFormData>) => {
  const { isLoading } = useQuery(['profile'], () => UserService.getProfile(), {
    onSettled(data) {
      setValue('email', data?.email!);
    },
  });

  const { mutateAsync } = useMutation(
    ['update profile'],
    (data: IAuthFormData) => UserService.updateProfile(data),
    {
      onSettled() {
        Toast.show({
          text1: 'Update profile',
          text2: 'update was success',
          type: 'success',
        });
      },
    }
  );

  const onSubmit: SubmitHandler<IAuthFormData> = async data => {
    await mutateAsync(data);
  };

  return { onSubmit, isLoading };
};
