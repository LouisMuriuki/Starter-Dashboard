import React from 'react'
import { Column } from '@ant-design/plots';
const data = [
  { "city": "mon", "type": "meetings", "value": 14500 },
  { "city": "mon", "type": "visitors", "value": 8500 },
  { "city": "tue", "type": "meetings", "value": 9000 },
  { "city": "tue", "type": "visitors", "value": 8500 },
  { "city": "Wen", "type": "meetings", "value": 16000 },
  { "city": "Wen", "type": "visitors", "value": 5000 },
  { "city": "Thur", "type": "meetings", "value": 14000 },
  { "city": "Thur", "type": "visitors", "value": 9000 },
  { "city": "Fri", "type": "meetings", "value": 14000 },
  { "city": "Fri", "type": "visitors", "value": 9000 },
  { "city": "Sat", "type": "meetings", "value": 9000 },
  { "city": "Sat", "type": "visitors", "value": 8500 },
  { "city": "sun", "type": "meetings", "value": 17000 },
  { "city": "sun", "type": "visitors", "value": 6000 },

  
]
const BarChart = () => {
  const config = {
    data,
    xField: 'city',
    yField: 'value',
    seriesField: 'type',
    isGroup: true,
    columnStyle: {
      radius: [20, 20, 0, 0],
    }
  }

  return (
    <div className="rounded bg-white shadow-md border p-3">
      <h1 className='flex items-center justify-center text-[#25385f] '>This Week's Engagements</h1>
      <Column className='cursor-pointer' {...config} />
    </div>
  )
}

export default BarChart