import { Alert } from 'react-native';

export const animalImageResolver = name => {
  const resolver = {
    cow: require('../assets/images/cow.png'),
    dog: require('../assets/images/dog.png'),
    cat: require('../assets/images/cat.png'),
    mustelids: require('../assets/images/mustelids.png')
  };
  return resolver[name] ? resolver[name] : null;
};

export const handleErrorAlert = (err) =>
  Alert.alert(
    err.message, '',
    [
      { text: 'OK' }
    ],
    { cancelable: false }
  );