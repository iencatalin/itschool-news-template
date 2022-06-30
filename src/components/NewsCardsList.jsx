import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";

const NewsCardsList = (props) => {
  const { news } = props;
  return (
    <Container>
      <Row>
        {news.map((newsItem) => (
          <Col lg={4} md={6} xs={12} className='mb-4' key={newsItem.id}>
            <NewsCard
              id={newsItem.id}
              thumbnail={newsItem.thumbnail}
              title={newsItem.title}
              description={newsItem.description}
              hasCloseButton={newsItem.hasCloseButton}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsCardsList;
