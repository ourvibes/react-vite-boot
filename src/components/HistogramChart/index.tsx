import React, { memo } from 'react';
import { Empty, Spin } from 'antd';
import { Chart, Interval, Axis } from 'bizcharts';
import numeral from 'numeral';

import { ScaleOption } from 'bizcharts/lib/interface';

export interface HistogramChartProps {
  loading: boolean;
  data: any[] | undefined;
  position: string;
  scale?: {
    [field: string]: ScaleOption;
  };
}

const HistogramChart: React.FC<HistogramChartProps> = (props: HistogramChartProps) => {
  const { loading, data, position, scale } = props;

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
    <Chart height={320} autoFit data={data} scale={scale} appendPadding={[10, 10, 0, 10]}>
      <Interval position={position} />
      <Axis
        name="retentionRate"
        label={{ formatter: (val) => numeral(val).format('0.0%') }}
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
    </Chart>
  );
};

export default memo(HistogramChart);
