
export const colors = {
  primary: '#05D1D2',
  primaryText: '#FFFFFF',
  link: '#4361EE',
  background: '#FFFFFF',
  backgroundSecondary: '#F9F9F9',
  surface: '#F4F4F4',
  text: '#212121',
  textMuted: '#909090',
  text1: '#212121',
  text2: '#505050',
  text35: '#353535',
  icon: '#767676',
  muted: '#909090',
  disabled: '#B5B6BD',
  border: '#D9D9D9',
  danger: '#DC2626',
  overlay: 'rgba(0,0,0,0.5)',
} as const;

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 } as const;
export const radius = { xs: 4, sm: 6, md: 12, lg: 24, full: 999 } as const;

export const shadow = {
  card: {
    shadowColor: '#C0C0C0',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 3,
  },
  fab: {
    shadowColor: '#939393',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
} as const;

export const typography = {
  title: { fontSize: 14, fontWeight: '700' as const },
  heading: { fontSize: 14, fontWeight: '600' as const },
  body: { fontSize: 12, fontWeight: '400' as const },
  caption: { fontSize: 10, fontWeight: '400' as const },
  small: { fontSize: 8, fontWeight: '400' as const },
};

export const theme = { colors, spacing, radius, shadow, typography };
export type Theme = typeof theme;
