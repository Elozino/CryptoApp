import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { Col, Row, Typography, Select } from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, CheckOutlined, ExclamationCircleOutlined, NumberOutlined, ThunderboltOutlined, StopOutlined, TrophyOutlined } from '@ant-design/icons'
import { useGetCryptoDetailsQuery } from '../services/cryptoApi'


const { Title, Text } = Typography
const { Option } = Select


function CryptoDetails() {
  //To know the currenccy we are looking at we need the coin Id
  //useParams takes the Id from the Url and allows you to use it as a variable
  const { coinId } = useParams()
  const [timePeriod, setTimePeriod] = useState("7d")
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  const cryptoDetails = data?.data?.coin

  console.log(cryptoDetails);


  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  // Slug is the alternative name for the crypto currency (refer to the api docs)

  if (isFetching) return "Loading..."
  // console.log(stats.icon);
  return (
    <div>
      CryptoDetails {coinId}
      <Col className='coin-detail-container'>
        <Col className='coin-heading'>
          <Title level={2} className='coin-name'>
            {cryptoDetails.name} ({cryptoDetails.symbol}) Price
          </Title>
          <p>
            {cryptoDetails.name} live price in US dollar. View value statistics, market cap and supply.
          </p>
        </Col>
        <Select
          defaultValue="7d"
          className="select-timeperiod"
          placeholder="Select Time Period"
          onChange={(value) => setTimePeriod(value)}
        >
          {time.map((date) => <Option key={date}>{date}</Option>)}
        </Select>

        {/* linechart */}
        <Col className='stats-container'>
          <Col className='coin-value-statistics'>
            <Col className='coin-value-statistics-heading'>
              <Title level={2} className='coin-details-heading '>
                {cryptoDetails.name} value Statistics
              </Title>
              <p>
                An overview showing the stats of {cryptoDetails.name}
              </p>
            </Col>
            {stats.map((data) => (

              <Col className='coin-stats'>
                <Col className='coin-stats-name'>
                  <Text>{data.icon}</Text>
                  <Text>{data.title}</Text>
                </Col>
                <Text className='stats'>{data.value}</Text>
              </Col>
            ))}
          </Col>
        </Col>

        <Col className='other-stats-info'>
          <Col className='coin-value-statistics-heading'>
            <Title level={2} className='coin-details-heading '>
              Other Statistics
            </Title>
            <p>
              An overview showing the stats of cryptocurrencies
            </p>
          </Col>
          {genericStats?.map(data => (
            <Col className='coin-stats'>
              <Col className='coin-stats-name'>
                <Text>{data.icon}</Text>
                <Text>{data.title}</Text>
              </Col>
              <Text className='stats'>{data.value}</Text>
            </Col>
          ))}
        </Col>
      </Col>
    </div >
  )
}

export default CryptoDetails
