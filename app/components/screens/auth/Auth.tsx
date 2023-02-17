import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { Pressable, Text, View } from 'react-native';

import { Button, DismissKeyboard, Loader } from '@/components/ui';

import { IAuthFormData } from '@/shared/types/auth.interface';

import AuthFields from './AuthFields';
import { useAuthMutation } from './useAuthMutation';

const Auth: FC = () => {
  const [isReg, setIsReg] = useState(false);

  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: 'onChange',
  });

  const { isLoading, loginSync, registerSync } = useAuthMutation(reset);

  const onSubmit: SubmitHandler<IAuthFormData> = data => {
    if (isReg) registerSync(data);
    else loginSync(data);
  };

  return (
    <DismissKeyboard>
      <View className="mx-2 justify-center items-center flex-1">
        <View className="w-9/12">
          <Text className="text-center text-white text-4xl font-bold mb-2.5">
            {isReg ? 'Register' : 'Login'}
          </Text>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <AuthFields control={control} isPassRequired />
              <Button
                onPress={handleSubmit(onSubmit)}
                icon={'film'}
                className="w-3/4"
              >
                Go to watch
              </Button>

              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text className="text-white opacity-30 text-right text-base mt-3">
                  {isReg ? 'Login' : 'Register'}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </DismissKeyboard>
  );
};

export default Auth;
