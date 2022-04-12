import {useEffect, useState} from 'react'

import './index.css'

const Counter = () => {
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    fetch('https://api.covid19india.org/data.json')
      .then((res) => res.json())
      .then((jsonData) => setApiData(jsonData))
  })

  return (
    <div>
      <center>
        <h1 className="main-heading">Covid 19 Dashboard</h1>
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Active</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>LastUpdated</th>
            </tr>

            <tbody>
              {apiData.map((each, index) => {
                return (
                  <tr key={index}>
                    <td>{each.state}</td>
                    <td>{each.confirmed}</td>
                    <td>{each.active}</td>
                    <td>{each.recovered}</td>
                    <td>{each.deaths}</td>
                    <td>{each.lastUpdatedTime}</td>
                  </tr>
                )
              })}
            </tbody>
          </thead>
        </table>
      </center>
    </div>
  )
}

export default Counter
