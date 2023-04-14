import {View} from 'react-native';
import React, {FC, useEffect} from 'react';
import tw from 'twrnc';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface BarProps {
  totalHeight: number;
  barHeight: number;
  barWidth: number;
  barMargin: number;
}

const Bar: FC<BarProps> = ({totalHeight, barHeight, barWidth, barMargin}) => {
  const animatedHeight = useSharedValue<number>(0);

  useEffect(() => {
    animatedHeight.value = withTiming(barHeight);
  }, [barHeight, animatedHeight]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
    };
  });

  return (
    <View
      style={[
        tw`bg-gray-800 flex-row rounded-2xl mx-[${barMargin}]`,
        {height: totalHeight, width: barWidth},
      ]}
    >
      <Animated.View
        style={[
          tw`bg-green-500 rounded-2xl self-end`,
          {width: barWidth},
          animatedStyle,
        ]}
      />
    </View>
  );
};

export default Bar;
