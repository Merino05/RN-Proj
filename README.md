# My App (Expo + React Native)

## اجرا
    npm install
    npx expo start        # با Expo Go یا شبیه‌ساز (i / a)

## فایل .env
فایل `.env` ساخته شده؛ آدرس API رو در `EXPO_PUBLIC_API_URL` بذارید.

## ساختار
- `src/app` route ها (Expo Router)
- `src/core` api, storage, theme, updates, config
- `src/shared` کامپوننت‌های عمومی
- `src/features/<name>` api / hooks / schemas / store / components
- `src/providers`

## آپدیت بدون نصب (EAS Update)
    npm i -g eas-cli && eas login && eas init && eas update:configure
    eas build --profile production --platform all
    npm run update:prod -- "پیام آپدیت"
فقط تغییرات JS/asset با OTA می‌رسن؛ تغییر native یا ارتقای SDK = بیلد جدید + بالا بردن `version`.

## کنترل کیفیت
    npm run typecheck
