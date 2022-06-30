import LottieView from 'lottie-react-native';
import React from 'react';

const ErrorAnimation = () => {
  return (
    <LottieView
      autoPlay={true}
      source={require('../../assets/872-empty-list.json')}
    />
  );
};
export default ErrorAnimation;
