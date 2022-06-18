import React, { memo } from 'react';
import { Empty, Spin } from 'antd';
import { Axis, Chart, LineAdvance, Slider } from 'bizcharts';
import { ScaleOption } from 'bizcharts/lib/interface';

export interface LineChartProps {
  loading?: boolean;
  data?: any[] | undefined;
  position: string;
  valueFiled?: string;
  scale?: {
    [field: string]: ScaleOption;
  };
}

const LineChart: React.FC<LineChartProps> = (props: LineChartProps) => {
  const { loading, data, position, scale, valueFiled } = props;

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

  return (
    <Chart
      autoFit
      height={320}
      data={data}
      appendPadding={[10, 10, 0, 10]}
      scale={scale}
      animate={false}
    >
      {valueFiled && (
        <Axis
          name={valueFiled}
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
      )}
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
      <LineAdvance shape="smooth" point area position={position} />
    </Chart>
  );
};

export default memo(LineChart);
