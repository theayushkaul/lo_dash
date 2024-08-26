import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const valueFormatter = (value: number | null) => `${value}`;
const dataset = [
  {
    interactions: 21,
    day: 'Mon',
  },
  {
    interactions: 28,
    day: 'Tue',
  },
  {
    interactions: 41,
    day: 'Wed',
  },
  {
    interactions: 73,
    day: 'Thu',
  },
  {
    interactions: 99,
    day: 'Fri',
  },
  {
    interactions: 144,
    day: 'Sat',
  },
  {
    interactions: 319,
    day: 'Sun',
  }
];

const chartSetting = {
  yAxis: [
    {
      disableLine: true
    },
  ],
  series: [
    {
      dataKey: 'interactions',
      valueFormatter,
      margin:"3px"
    },
  ],
  height: 250,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function TickPlacementBars() {
  const [tickPlacement, setTickPlacement] = React.useState<
    'start' | 'end' | 'middle' | 'extremities'
  >('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState<
    'middle' | 'tick'
  >('middle');

  return (
    <div style={{ width: '100%' }} className='flex justify-center items-center'>
      {/* <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'day', tickPlacement, tickLabelPlacement,disableLine: true},
        ]}
        borderRadius={10}
        colors={["#7C8CF8", "#ABF5B5", "#000000", "#8ACBF8", "#A2AFC4", "#A7EBD8"]} 
        {...chartSetting}
        margin={{ bottom: 30 }}
      /> */}
      <div className='flex items-end gap-4 text-gray-400 mt-10'>
        <div className='h-32 flex flex-col justify-between text-xs items-end mr-2'>
            <div>300</div>
            <div>200</div>
            <div>100</div>
            <div>0</div>
        </div>
      <div className='bg-[#A7EBD8] rounded-xl h-32 w-8'></div>
      <div className='bg-[#A2AFC4] rounded-xl h-28 w-8'></div>
      <div className='bg-[#8ACBF8] rounded-xl h-20 w-8'></div>
      <div className='bg-[#000000] rounded-xl h-24 w-8'></div>
      <div className='bg-[#ABF5B5] rounded-xl h-36 w-8'></div>
      <div className='bg-[#7C8CF8] rounded-xl h-32 w-8'></div>
      <div className='bg-[#A7EBD8] rounded-xl h-36 w-8'></div>
    </div>
    </div>
  );
}
