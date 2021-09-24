module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          actions: './src/actions',
          reducers: './src/reducers',
          components: './src/components',
          routes: './src/routes',
          utils: './src/utils',
          configs: './src/configs',
          assets: './src/assets',
        },
      },
    ],
  ],
};
