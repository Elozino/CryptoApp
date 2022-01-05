import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { Col, Row, Typography, Select } from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined } from '@ant-design/icons'
import { useGetCryptoDetailsQuery } from '../services/cryptoApi'


const { Title, Text } = Typography
const { Option } = Select


function CryptoDetails() {
  //To know the currenccy we are looking at we need the coin Id
  //useParams takes the Id from the Url and allows you to use it as a variable
  const { coinId } = useParams()
  const [timePeriod, setTimePeriod] = useState("7d")
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)

  console.log(data);

  return (
    <div>
      CryptoDetails {coinId}
    </div>
  )
}

export default CryptoDetails
