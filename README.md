# CryptoApp

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
        {/* line chart */}
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
            {stats?.map((icon, title, value) => (
              <Col className='coin-stats'>
                <Col className='coin-stats-name'>
                  <Text>{icon}</Text>
                  <Text>{title}</Text>

                </Col>
                <Text className='stats'>{value}</Text>
              </Col>
            ))}
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
            {genericStats?.map((icon, title, value) => (
              <Col className='coin-stats'>
                <Col className='coin-stats-name'>
                  <Text>{icon}</Text>
                  <Text>{title}</Text>

                </Col>
                <Text className='stats'>{value}</Text>
              </Col>
            ))}
          </Col>
        </Col>
      </Col>