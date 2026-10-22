import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { colors, radius, spacing } from '@/core/theme';
import { AppText } from './AppText';
import { Icon, IconName } from './Icon';

type SheetProps = { visible: boolean; onClose: () => void; children: React.ReactNode };

function Sheet({ visible, onClose, children }: SheetProps) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose} />
      <View style={styles.sheet}>
        <View style={styles.handle} />
        {children}
      </View>
    </Modal>
  );
}

export function ConfirmSheet(props: {
  visible: boolean; message: string; confirmLabel: string; cancelLabel?: string;
  onConfirm: () => void; onClose: () => void; loading?: boolean;
}) {
  return (
    <Sheet visible={props.visible} onClose={props.onClose}>
      <AppText variant="heading" color="#000" style={styles.message}>{props.message}</AppText>
      <View style={styles.actions}>
        <Pressable onPress={props.onConfirm} disabled={props.loading} style={[styles.btn, styles.btnFilled]}>
          <AppText bold color="#fff">{props.confirmLabel}</AppText>
        </Pressable>
        <Pressable onPress={props.onClose} style={[styles.btn, styles.btnOutline]}>
          <AppText bold color={colors.primary}>{props.cancelLabel ?? 'لغو'}</AppText>
        </Pressable>
      </View>
    </Sheet>
  );
}

export type ActionItem = { key: string; label: string; icon: IconName; danger?: boolean };
export function ActionSheet(props: {
  visible: boolean; items: ActionItem[]; onSelect: (key: string) => void; onClose: () => void;
}) {
  return (
    <Sheet visible={props.visible} onClose={props.onClose}>
      {props.items.map((it) => (
        <Pressable key={it.key} style={styles.item} onPress={() => props.onSelect(it.key)}>
          <Icon name={it.icon} size={18} color={it.danger ? colors.danger : colors.text35} />
          <AppText variant="heading" color={it.danger ? colors.danger : colors.text1}>{it.label}</AppText>
        </Pressable>
      ))}
    </Sheet>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: colors.overlay },
  sheet: {
    backgroundColor: colors.background, borderTopLeftRadius: radius.lg, borderTopRightRadius: radius.lg,
    paddingHorizontal: 20, paddingTop: 8, paddingBottom: 32,
  },
  handle: { alignSelf: 'center', width: 76, height: 6, borderRadius: 33, backgroundColor: '#212121', marginBottom: spacing.lg },
  message: { textAlign: 'center', marginBottom: spacing.lg },
  actions: { flexDirection: 'row', gap: spacing.md },
  btn: { flex: 1, height: 40, borderRadius: radius.xs, alignItems: 'center', justifyContent: 'center' },
  btnFilled: { backgroundColor: colors.primary },
  btnOutline: { borderWidth: 1, borderColor: colors.primary },
  item: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: 14 },
});
