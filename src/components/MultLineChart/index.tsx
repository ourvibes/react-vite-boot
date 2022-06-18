import React, { memo } from 'react';
import { Empty, Spin } from 'antd';
import { Chart, Line, Point, Tooltip, Legend, Axis, Slider } from 'bizcharts';

interface MultLineChartProps {
  loading?: boolean;
  data?: Array<any> | undefined;
}

interface TransformedChartData {
  label: string;
  value: number;
  category: string;
}

const transform = (rows: Array<any> = []) => {
  const arr: Array<TransformedChartData> = [];
  for (const row of rows) {
    const { time, items = [] } = row;
    const list =
      items?.map((it: { value: string; label: string; }) => {
        return {
          label: time,
          value: it?.value ?? 0,
          category: it?.label,
        };
      }) ?? [];
    arr.push(...list);
  }
  return arr;
};

const MultLineChart: React.FC<MultLineChartProps> = (props: MultLineChartProps) => {
  const { loading, data } = props;

  if (loading) {
    return <Spin spinning={loading} className="global-empty-wrap" />;
  }

  if (!data || data?.length <= 0) {
    return (
      <div className="global-empty-wrap">
        <Empty />
      </div>
    );
  }

  const transformData = transform(data);

  return (
    <Chart appendPadding={[10, 10, 0, 10]} autoFit height={420} data={transformData}>
      <Legend
        position="top"
        background={{
          style: {
            stroke: '#fff',
          },
        }}
      />
      <Axis
        name="value"
        grid={{
          line: {
            type: 'line',
            style: {
              stroke: '#ccc',
              lineDash: [3, 3],
              lineWidth: 1,
            },
          },
        }}
      />
      <Slider
        height={14}
        trendCfg={{ data: [] }}
        textStyle={{ fill: '#eee' }}
        foregroundStyle={{ fill: '#ccc' }}
        padding={[10, 10, 0, 10]}
        handlerStyle={{
          style: {
            fill: '#fff',
          },
        }}
        start={0}
        end={0.4}
      />
      <Point position="label*value" color="category" shape="circle" size={3} />
      <Line shape="smooth" position="label*value" color="category" />
      <Tooltip shared />
    </Chart>
  );
};

export default memo(MultLineChart);
