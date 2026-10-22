// فونت طرح: IRANYekanXFaNum (Regular / Medium / DemiBold / Bold).
// فونت لایسنس‌دار است؛ فایل‌ها را در assets/fonts بگذارید و در FONT_FILES ثبت کنید:
//   'IRANYekanXFaNum-Regular': require('../../../assets/fonts/IRANYekanXFaNum-Regular.ttf'),
export const FONT_FILES: Record<string, number> = {
  'IRANSansXFaNum-Regular': require('../../../assets/fonts/IRANSansXFaNum-Regular.ttf'),
  'IRANSansXFaNum-Bold': require('../../../assets/fonts/IRANSansXFaNum-Bold.ttf'),
   'IRANSansXFaNum-DemiBold': require('../../../assets/fonts/IRANSansXFaNum-DemiBold.ttf'),
   'IRANSansXFaNum-Medium': require('../../../assets/fonts/IRANSansXFaNum-Medium.ttf'),
};

export const fontFamily = {
  regular: 'IRANSansXFaNum-Regular',
  medium: 'IRANSansXFaNum-Medium',
  demiBold: 'IRANSansXFaNum-DemiBold',
  bold: 'IRANSansXFaNum-Bold',
};
