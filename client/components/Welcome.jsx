import React from 'react';
import styled from 'styled-components';
import {
  Card, CardImg, CardBody,CardTitle, 
  CardSubtitle, Row, Col
} from 'reactstrap';

const Title = styled.h1`
  font-size: 3vw;
  color: #A95D22;
  padding-top: 20%;
  padding-left: 15%;
`;

const SubTitle = styled.h4`
  font-size: 1.5vw;
  padding-left: 15%;
  padding-top: 0.5%;
`;

const Welcome = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <Row>
            <Col xs="6">
              <CardTitle>
                <Title>Welcome to America Asia Economic Alliance</Title>
              </CardTitle>
              <CardSubtitle>
                <SubTitle>Making our community a better place!</SubTitle>
              </CardSubtitle>
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