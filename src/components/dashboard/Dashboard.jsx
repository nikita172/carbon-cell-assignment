import React, { useState, useEffect } from 'react'
import "./dashboard.css";
import ChartBox from '../chartBox/ChartBox';

const Dashboard = ({ isMenuOpen, setIsMenuOpen }) => {
  const [prices, setPrices] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json",
        { method: "GET" })
      const result = await res.json();
      setPrices(result.bpi)
    }
    getData()
  }, [])
  return (
    <div className={`dashboardContainer ${isMenuOpen ? "collapsedMenu" : ""}`} >
      <div className="dashboardWrapper">
        <div className="chartContainer">
          <div className="chartContainerHeader">
            <h1>Market Overview</h1>
            <div className='chartItems'>
              <span className="chartItemName first" >NBST</span>
              <span className="chartItemName" >EPT</span>
              <span className="chartItemName" >WPCT</span>
              <span className="chartItemName" >RET</span>
              <span className="chartItemName" >WET</span>
            </div>
          </div>
          <div className='chartsMainview'>
            <ChartBox />
            <div className='countryName'>
              United States of America
            </div>
          </div>
        </div>
      </div>
      <div className='cryptoPriceHeading'>Cryptocurrency Prices</div>
      <div className="topCards">
        {prices && Object.keys(prices).map(i => (
          <div className="topCardWrapper">
            <div className="topCard">
              <div className="topCardLeft">
                <span>{prices[i].description}</span>
              </div>
              <div className='topCardRight'
                style={{ color: "#fb9678" }}>{prices[i].code}</div>
            </div>
            <div className="bitcoinPrice">
              <span>Current Price: {prices[i].rate}</span>
              {prices[i].symbol === "&euro;" && <span style={{ marginLeft: "5px", color: "#fb9678" }}>&euro;</span>}
              {prices[i].symbol === "&#36;" && <span style={{ marginLeft: "5px", color: "#fb9678" }}>&#36;</span>}
              {prices[i].symbol === "&pound;" && <span style={{ marginLeft: "5px", color: "#fb9678" }}>&pound;</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard