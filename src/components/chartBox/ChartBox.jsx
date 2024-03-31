import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import "./chartBox.css";

const ChartBox = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population",
        { method: "GET" })
      const result = await res.json();

      const populationGraph = result.data.map((d => {
        return {
          nation: d['Slug Nation'],
          year: d.Year,
          population: d.Population,
        }
      }))
      setData(populationGraph)
    }
    getData()
  }, [])

  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data && data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="year" />
          <YAxis type="number" domain={['dataMin', 'dataMax']}
            width={100} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="population" stroke="#fb9678" strokeWidth={4} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartBox