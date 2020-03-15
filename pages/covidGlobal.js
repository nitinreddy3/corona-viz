import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import Layout from '../components/Layout';
import Link from '../src/Link';
import fetch from 'isomorphic-unfetch';
import { COVID_API } from '../constants'

const CovidGlobal = props => {
  const { pieData } = props;
  console.log(pieData)
  return (
    <Layout pageTitle="PieChart Representation">
      <Link href="/" color="secondary">
        Home
      </Link>
      <div style={{ height: 500, width: '100%' }}>
        <ResponsivePie
          data={pieData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: 'paired' }}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: 'color' }}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[
            {
              match: {
                id: 'Confirmed'
              },
              id: 'solid'
            },
            {
              match: {
                id: 'Recovered'
              },
              id: 'solid'
            },
            {
              match: {
                id: 'Deaths'
              },
              id: 'solid'
            },
          ]}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000'
                  }
                }
              ]
            }
          ]}
        />
      </div>
    </Layout>
  )
}

CovidGlobal.getInitialProps = async function () {
  const res = await fetch(COVID_API);
  const data = await res.json();

  return {
    pieData: [
      {
        id: "Confirmed",
        label: "Confirmed",
        value: data.confirmed.value,
        "color": "hsl(292, 70%, 50%)"
      },
      {
        id: "Recovered",
        label: "Recovered",
        value: data.recovered.value,
        "color": "hsl(108, 70%, 50%)"
      },
      {
        id: "Deaths",
        label: "Deaths",
        value: data.deaths.value,
        "color": "hsl(153, 70%, 50%)"
      }
    ]
  };
};

export default CovidGlobal;