import Snackbar from 'react-native-snackbar';

export const noInternetConnectionPopup = () => Snackbar.show({
  title: 'No Internet Connection',
  duration: Snackbar.LENGTH_SHORT,
});