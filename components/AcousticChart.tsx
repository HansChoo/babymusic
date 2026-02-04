import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

const data = [
  { freq: '100Hz', standard: 80, vvip: 70, label: '저음' },
  { freq: '300Hz', standard: 85, vvip: 95, label: '핵심 전달 구간' },
  { freq: '500Hz', standard: 90, vvip: 100, label: '목소리 대역' },
  { freq: '800Hz', standard: 85, vvip: 98, label: '선명도' },
  { freq: '1kHz', standard: 70, vvip: 90, label: '한계선' },
  { freq: '2kHz', standard: 40, vvip: 60, label: '양수 차단 시작' },
  { freq: '4kHz', standard: 20, vvip: 30, label: '고음' },
  { freq: '8kHz', standard: 10, vvip: 15, label: '초고음' },
];

const AcousticChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-dark">소리 전달력 비교 (Frequency Response)</h3>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
            <span className="text-gray-500">일반 음악</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-[#7C3AED] rounded-full"></div>
            <span className="text-primary font-bold">Royal 맞춤 설계</span>
          </div>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorVvip" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorStandard" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E5E7EB" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#E5E7EB" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
          <XAxis 
            dataKey="label" 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#9CA3AF', fontSize: 11, fontWeight: 500}} 
            dy={10}
            interval={1}
          />
          <YAxis hide />
          <Tooltip 
            contentStyle={{ 
              borderRadius: '16px', 
              border: 'none', 
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#FFF',
              padding: '12px'
            }}
            itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
            labelStyle={{ display: 'none' }}
            formatter={(value, name) => [`전달력 ${value}%`, name]}
          />
          {/* Reference Lines for Key Zones */}
          <ReferenceLine x="핵심 전달 구간" stroke="#7C3AED" strokeDasharray="3 3" strokeOpacity={0.5} />
          
          <Area 
            type="monotone" 
            dataKey="standard" 
            stroke="#9CA3AF" 
            fillOpacity={1} 
            fill="url(#colorStandard)" 
            strokeWidth={2}
            name="일반 음악"
            animationDuration={1500}
          />
          <Area 
            type="monotone" 
            dataKey="vvip" 
            stroke="#7C3AED" 
            fillOpacity={1} 
            fill="url(#colorVvip)" 
            strokeWidth={4}
            name="최적화 설계"
            animationDuration={1500}
            animationDelay={300}
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="mt-6 flex justify-center">
        <div className="bg-secondary px-4 py-2 rounded-xl text-center">
          <p className="text-xs font-medium text-primary">
            <span className="font-bold">Fact:</span> 양수는 2,000Hz 이상의 높은 소리를 차단합니다. 
            <br className="md:hidden"/>
            저희는 <span className="underline decoration-primary decoration-2">아이가 잘 듣는 음역대를 강화</span>하여 전달력을 높입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcousticChart;
