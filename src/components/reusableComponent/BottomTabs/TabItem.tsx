import {Pressable, Text} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';

// Constant
import {getPathXCenterByIndex} from '../../../utilities/path';
import usePath from '../../../hooks/usePath';
import {SCREEN_WIDTH} from '../../../constants/screenSize';

export type TabProps = {
  label: string;
  icon: string;
  index: number;
  activeIndex: number;
  onTabPress: () => void;
};

const ICON_SIZE = 23;
const LABEL_WIDTH = SCREEN_WIDTH / 2;
const AnimatedIcon = Animated.createAnimatedComponent(Feather);

const TabItem = ({label, icon, index, activeIndex, onTabPress}: TabProps) => {
  const {curvedPaths} = usePath();
  const animatedActiveIndex = useSharedValue(activeIndex);
  const iconPosition = getPathXCenterByIndex(curvedPaths, index);
  const labelPosition = getPathXCenterByIndex(curvedPaths, index);

  const isActive = useSharedValue(animatedActiveIndex.value - 1 === index);

  const tabStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? -35 : 20;
    const iconPositionX = iconPosition - index * ICON_SIZE;
    return {
      width: ICON_SIZE,
      height: ICON_SIZE,
      transform: [
        {translateY: withTiming(translateY)},
        {translateX: iconPositionX - ICON_SIZE / 2},
      ],
    };
  });

  const labelContainerStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? 36 : 100;
    return {
      transform: [
        {translateY: withTiming(translateY)},
        {translateX: labelPosition - LABEL_WIDTH / 2},
      ],
    };
  });

  const iconColor = useSharedValue(
    activeIndex === index + 1 ? 'white' : 'rgba(255, 255, 255,0.8)',
  );

  const animatedIconProps = useAnimatedProps(() => ({
    color: iconColor.value,
  }));

  // First render
  useEffect(() => {
    animatedActiveIndex.value = activeIndex;
    if (activeIndex === index + 1) {
      iconColor.value = withTiming('white');
    } else {
      iconColor.value = withTiming('rgba(255, 255, 255,0.8)');
    }
  }, [activeIndex]);

  const pressableStyle = useAnimatedStyle(() => {
    const isActive = animatedActiveIndex.value - 1 === index;
    const translateY = isActive ? 20 : 5;
    return {
      top: withTiming(translateY),
    };
  });

  return (
    <>
      <Animated.View style={tabStyle}>
        <Animated.View style={pressableStyle}>
          <Pressable
            testID={`tab${label}`}
            hitSlop={{top: 30, bottom: 30, left: 50, right: 50}}
            onPress={onTabPress}
          >
            <AnimatedIcon
              name={icon}
              size={25}
              animatedProps={animatedIconProps}
            />
          </Pressable>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={[
          labelContainerStyle,
          {position: 'absolute', width: LABEL_WIDTH, alignItems: 'center'},
        ]}>
        <Text className="text-white text-base">{label}</Text>
      </Animated.View>
    </>
  );
};

export default TabItem;
