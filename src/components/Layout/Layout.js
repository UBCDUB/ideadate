import React from 'react';
import { Container, Row } from 'react-bootstrap';

const layout = (props) => {
    return (
        <Container>
            <Row>
                Place for nav bar.
            </Row>
            <main>
                { props.children }
            </main>
        </Container>
    )
}

export default layout;