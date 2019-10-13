import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components'

const TabsContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  position: relative;
  top: -2vh;
  a {
      text-decoration: inherit;
      color: inherit;
  }
`;

const layout = (props) => {
    return (
        <TabsContainer>
            <Row>
                Place for nav bar.
            </Row>
            <main>
                { props.children }
            </main>
        </TabsContainer>
    )
}

export default layout;