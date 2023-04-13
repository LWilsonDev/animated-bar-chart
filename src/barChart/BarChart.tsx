import {View, useWindowDimensions, Text} from 'react-native';
import React, {FC} from 'react';
import tw from 'twrnc';

import Bar from './Bar';
import {BarData} from './types';

interface BarChartProps {
  data: BarData[];
  yMaxValue: number;
}

const BarChart: FC<BarChartProps> = ({data, yMaxValue}) => {
  const chartHeight = 200;
  const {width} = useWindowDimensions();
  const margin = 4;

  const calculateBarHeight = (barValue: BarData) => {
    return (barValue.value / yMaxValue) * chartHeight;
  };

  const calculateBarWidth = () => {
    return width / data.length - margin * 2;
  };

  return (
    <>
      <View style={tw`flex-row`}>
        {data.map((bar, index) => {
          const barHeight = calculateBarHeight(bar);
          const barWidth = calculateBarWidth();
          return (
            <View key={index.toString()}>
              <Bar
                barMargin={margin}
                barHeight={barHeight}
                barWidth={barWidth}
                totalHeight={chartHeight}
              />
              <Text style={tw`self-center text-base text-white pt-3`}>
                {bar.label}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={tw`flex-row`}></View>
    </>
  );
};

export default BarChart;
