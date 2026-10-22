import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Text } from 'react-native';
import { Button, TextField } from '@/shared/components';
import { theme } from '@/core/theme';
import { loginSchema } from '../schemas/auth.schema';
import { useLogin } from '../hooks/useLogin';
import type { LoginInput } from '../types';

export function LoginForm() {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });
  const login = useLogin();

  return (
    <>
      <Controller control={control} name="email" render={({ field }) => (
        <TextField label="ایمیل" autoCapitalize="none" keyboardType="email-address"
          value={field.value} onChangeText={field.onChange} error={errors.email?.message} />
      )} />
      <Controller control={control} name="password" render={({ field }) => (
        <TextField label="رمز عبور" secureTextEntry
          value={field.value} onChangeText={field.onChange} error={errors.password?.message} />
      )} />
      {login.error && <Text style={{ color: theme.colors.danger }}>{login.error.message}</Text>}
      <Button title="ورود" loading={login.isPending} onPress={handleSubmit((v) => login.mutate(v))} />
    </>
  );
}
