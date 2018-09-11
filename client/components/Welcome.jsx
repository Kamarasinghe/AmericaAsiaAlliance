import React from 'react';
import {
  Card, CardImg, CardBody,CardTitle, 
  CardSubtitle, Row, Col
} from 'reactstrap';

const Welcome = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <Row>
            <Col xs="6">
              <CardTitle>Welcome to America Asia Economic Alliance</CardTitle>
              <CardSubtitle>Making our community a better place!</CardSubtitle>
            </Col>
            <Col xs="6">
              <CardImg top width="100%" src="https://previews.123rf.com/images/tonobalaguer/tonobalaguer1501/tonobalaguer150100194/35463827-manhattan-new-york-chamber-of-commerce-facade-and-columns-us.jpg" alt="Card image cap" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Welcome;