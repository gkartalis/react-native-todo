module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: [
    'detox'
  ],
  env: {
        jest: true,
        jasmine: true,
        'detox/detox': true
      }
};
