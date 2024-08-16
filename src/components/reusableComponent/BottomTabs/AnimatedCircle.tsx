import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import React from 'react';

type CircleProps = {
  circleX: Animated.SharedValue<number>;
};

const circleContainerSize = 50;

const AnimatedCircle = ({circleX}: CircleProps) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: circleX.value - circleContainerSize / 2}],
    };
  }, []);

  return (
    <Animated.View
      className={`absolute bg-[#00bffe] justify-center items-center rounded-full`}
      style={[
        circleContainerStyle,
        {
          top: -circleContainerSize / 2,
          width: circleContainerSize,
          height: circleContainerSize,
        },
      ]}
    />
  );
};

export default AnimatedCircle;
