import { ActivityIndicator, FlatList, Pressable, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { AppHeader, AppText, Icon } from '@/shared/components';
import { CategoryRow, useCategories, useCategory } from '@/features/catalog';
import { colors } from '@/core/theme';

export default function SubCategoriesScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const current = useCategory(id);
  const { data, isLoading } = useCategories(id);
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader
        title={current.data?.title}
        start={<Pressable onPress={() => router.back()}><Icon name="chevron-forward" size={24} color={colors.text1} /></Pressable>}
      />
      {isLoading ? <ActivityIndicator color={colors.primary} style={{ marginTop: 32 }} /> : (
        <FlatList
          data={data}
          keyExtractor={(c) => c.id}
          ListEmptyComponent={<AppText color={colors.muted} style={{ textAlign: 'center', marginTop: 32 }}>زیر‌دسته‌ای وجود ندارد</AppText>}
          renderItem={({ item }) => <CategoryRow category={item} onPress={() => router.push(`/categories/${item.id}`)} />}
        />
      )}
    </View>
  );
}
