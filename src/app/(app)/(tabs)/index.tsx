import {  Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { AppHeader, AppText, Icon } from '@/shared/components';
import { ProductGrid, QuickLinks, SellerInfo, useSellerProducts, useSellerProfile } from '@/features/seller';
import { useAuthStore } from '@/features/auth';
import { colors, shadow, spacing } from '@/core/theme';

import {
   ProductGridSkeleton,  SellerInfoSkeleton,
 
} from '@/features/seller';
export default function SellerProfileScreen() {
  const profile = useSellerProfile();
  const products = useSellerProducts();
  const logout = useAuthStore((s) => s.logout);

  return (
    <View style={styles.root}>
      <AppHeader
        title="کسب و کار برنج فروشان طارم"
        start={<Pressable onPress={() => void logout()}><Icon name="ellipsis-vertical" size={22} color={colors.text1} /></Pressable>}
        end={
          <>
            <View>
              <Icon name="notifications-outline" size={24} color={colors.text1} />
              <View style={styles.dot} />
            </View>
            <Pressable><Icon name="person-circle-outline" size={26} color={colors.text1} /></Pressable>
          </>
        }
      />
      <ScrollView contentContainerStyle={styles.content}>
        {profile.isLoading ? <SellerInfoSkeleton /> : profile.data && <SellerInfo seller={profile.data} />}<QuickLinks />
        <View style={styles.section}>
          <AppText variant="title" color={colors.text1} style={{ fontWeight: '600' }}>آگهی ها</AppText>
          <View style={styles.line} />
        </View>
        {products.isLoading ? <ProductGridSkeleton /> : <ProductGrid products={products.data ?? []} />}</ScrollView>
      <Pressable style={[styles.fab, shadow.fab]} onPress={() => router.push('/categories')}>
        <Icon name="add" size={26} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  content: { padding: 18, gap: spacing.lg, paddingBottom: 120 },
  dot: { position: 'absolute', top: 0, end: 2, width: 7, height: 7, borderRadius: 4, backgroundColor: '#E53935' },
  section: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  line: { flex: 1, height: 1, backgroundColor: colors.border },
  fab: { position: 'absolute', end: 24, bottom: 24, width: 47, height: 47, borderRadius: 5, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
});
