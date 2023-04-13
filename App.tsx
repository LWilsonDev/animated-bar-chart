import {useState} from 'react';
import {View} from 'react-native';
import BarChart from './src/barChart/BarChart';
import {BarData} from './src/barChart/types';
import tw from 'twrnc';
import ChartSelectButton from './src/ChartSelectButton';

const dataA: BarData[] = [
  {label: 'Jan', value: 30},
  {label: 'Feb', value: 60},
  {label: 'Mar', value: 70},
  {label: 'Apr', value: 80},
  {label: 'May', value: 45},
  {label: 'Jun', value: 60},
];

const dataB: BarData[] = [
  {label: 'Jul', value: 10},
  {label: 'Aug', value: 20},
  {label: 'Sep', value: 10},
  {label: 'Oct', value: 55},
  {label: 'Nov', value: 75},
  {label: 'Dec', value: 60},
];

const maxValue = 100;

export default function App() {
  const [dataSet, setDataSet] = useState<'a' | 'b'>('a');

  const handleButtonPress = () => {
    const newData = dataSet === 'a' ? 'b' : 'a';
    setDataSet(newData);
  };

  const getData = () => {
    return dataSet === 'a' ? dataA : dataB;
  };

  return (
    <View style={tw`justify-center h-full flex bg-gray-900`}>
      <ChartSelectButton onPress={handleButtonPress} text={'Change data'} />
      <BarChart yMaxValue={maxValue} data={getData()} />
    </View>
  );
}
