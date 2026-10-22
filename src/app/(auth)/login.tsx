import { Text } from 'react-native';
import { Screen } from '@/shared/components';
import { LoginForm } from '@/features/auth';
import { theme } from '@/core/theme';

export default function LoginScreen() {
  return (
    <Screen>
      <Text style={{ ...theme.typography.title, color: theme.colors.text }}>ورود</Text>
      <LoginForm />
    </Screen>
  );
}
