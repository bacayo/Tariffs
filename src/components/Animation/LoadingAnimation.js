import LottieView from 'lottie-react-native';
import React from 'react';

const LoadingAnimation = () => {
  return (
    <LottieView
      autoPlay={true}
      source={require('../../assets/51-preloader.json')}
    />
  );
};
export default LoadingAnimation;
