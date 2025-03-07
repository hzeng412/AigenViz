import dynamic from 'next/dynamic'

// 禁用 SSR 导入 Recharts 组件
const LineChart = dynamic(
  () => import('recharts').then((mod) => mod.LineChart),
  { ssr: false }
)

const Line = dynamic(
  () => import('recharts').then((mod) => mod.Line),
  { ssr: false }
)

// ... 其他需要的组件也类似导入

const YourChartComponent = () => {
  return (
    <div className="w-full h-[400px]">
      {typeof window !== 'undefined' && (
        <LineChart width={600} height={400} data={data}>
          <CartesianGrid />
          <XAxis dataKey="date" />
          <YAxis />
          <Line type="monotone" dataKey="field1A" stroke="#90EE90" />
          <Line type="monotone" dataKey="field2B" stroke="#006400" />
        </LineChart>
      )}
    </div>
  )
} 