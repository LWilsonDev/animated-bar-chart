import {Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import tw from 'twrnc';

interface ChartSelectButtonProps {
  text: string;
  onPress: () => void;
}

const ChartSelectButton: FC<ChartSelectButtonProps> = ({text, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={text}
      hitSlop={10}
      style={({pressed}) => [
        tw`flex-row items-center self-end border border-white rounded-xl p-2 mb-3`,
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
    >
      <Text style={tw`text-white`}>{text}</Text>
    </Pressable>
  );
};

export default ChartSelectButton;
