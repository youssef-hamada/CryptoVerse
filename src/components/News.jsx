import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews, error } = useGetCryptoNewsQuery();
  console.log("API Response:", cryptoNews); // Debugging

  if (error) {
    console.error("API Error:", error);
    return <div>Something went wrong...</div>;
  }
  if (!cryptoNews?.data) return <div>Loading...</div>;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            style={{ width: "100%" }}
            placeholder="Search News"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="cryptocurrency">Cryptocurrency</Option>
          </Select>
        </Col>
      )}
      {cryptoNews?.data?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news.thumbnail || "https://via.placeholder.com/200"}
                  alt="news"
                />
              </div>
              <p>
                {news.excerpt.length > 100
                  ? `${news.excerpt.substring(0, 100)}...`
                  : news.excerpt}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={news.thumbnail || "https://www.cryptocompare.com"}
                    alt="news"
                  />
                  <Text className="provider-name">{news.publisher.name}</Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
