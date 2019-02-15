import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const MyAwesomeLayout = (
    <Grid>
        <Row>
            <Col xs={12} md={8}>
                {/* Some content */}
            </Col>
            <Col xs={6} md={4}>
                {/* Some content */}
            </Col>
        </Row>

        <Row>
            <Col xs={6} md={4}>
                {/* Some content */}
            </Col>
            <Col xs={6} md={4}>
                {/* Some content */}
            </Col>
            <Col xsHidden md={4}>
                {/* Some content */}
            </Col>
        </Row>

        <Row>
            <Col xs={6} xsOffset={6}>
                {/* Some content */}
            </Col>
        </Row>

        <Row>
            <Col md={6} mdPush={6}>
                {/* Some content */}
            </Col>
            <Col md={6} mdPull={6}>
                {/* Some content */}
            </Col>
        </Row>
    </Grid>
);