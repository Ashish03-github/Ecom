module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@/features/': './src/features',
          '@/common/': './src/common',
          '@/constants/': './src/constants',
          '@/navigation/': './src/navigation',
          '@/services/': './src/services',
          '@/store/': './src/store',
          '@/theme/': './src/theme',
        },
      },
    ],
  ],
};
