import { ActivityIndicator, FlatList, Pressable, View } from 'react-native';
import { router } from 'expo-router';
import { AppHeader, AppText, Icon } from '@/shared/components';
import { CategoryRow, useCategories } from '@/features/catalog';
import { colors } from '@/core/theme';

export default function CategoriesScreen() {
  const { data, isLoading } = useCategories(null);
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader
        start={<Pressable onPress={() => router.back()}><Icon name="chevron-forward" size={24} color={colors.text1} /></Pressable>}
      >
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8, height: 40, paddingHorizontal: 12, borderRadius: 8, backgroundColor: colors.surface }}>
          <Icon name="search" size={18} color={colors.icon} />
          <AppText color={colors.icon}>جستجو محصولات برای لیست ...</AppText>
        </View>
      </AppHeader>
      {isLoading ? <ActivityIndicator color={colors.primary} style={{ marginTop: 32 }} /> : (
        <FlatList
          data={data}
          keyExtractor={(c) => c.id}
          renderItem={({ item }) => <CategoryRow category={item} onPress={() => router.push(`/categories/${item.id}`)} />}
        />
      )}
    </View>
  );
}
