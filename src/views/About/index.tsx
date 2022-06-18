import { Row, Divider } from "antd";

import { HistogramChart, LineChart } from "@components";
import { formatNum, INTEGER_FORMAT } from "@tools";

import mocks from './mock';

const About = () => {
  return (
    <>
      <Row>
        <HistogramChart
          loading={false}
          data={mocks}
          position="time*value"
          scale={{
            "value": {
              min: 0,
              alias: '数据指标',
              formatter: (value: number) => formatNum(value, INTEGER_FORMAT)
            }
          }}
        />
      </Row>

      <Divider />

      <Row>
        <LineChart
          loading={false}
          data={mocks}
          position="time*value"
          scale={{
            "value": {
              min: 0,
              alias: '数据指标',
              formatter: (value: number) => formatNum(value, INTEGER_FORMAT)
            }
          }}
        />
      </Row>
    </>
  );
};

export default About;
