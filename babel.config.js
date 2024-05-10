module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets/*': './assets/*',
          '@assets': './assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@locales/*': './src/locales/*',
          '@locales': './src/locales',
          '@types/*': './src/types/*',
          '@types': './src/types',
          '@screens': './src/screens',
          '@services': './src/services',
          '@storage': './src/storage',
          '@themes': './src/themes',
          '@utils': './src/utils',
          '@store': './src/store',
          '@firebase': './src/firebase',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'], //removing consoles.log from app during release (production) versions
    },
  },
};
