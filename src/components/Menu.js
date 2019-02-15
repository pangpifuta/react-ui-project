import React, { Component } from 'react'
//import { Container, Row, Col, Grid} from 'react-bootstrap/lib/';
import { Row, Col, Grid} from 'react-bootstrap/';
import { Button,PageHeader} from 'react-bootstrap/';
import {Container} from 'reactstrap';

class Menu extends Component {

  render() {
    return(

      <Grid>
  <Row>
    <Col xs={6} md={4}>
      Hi
      {/* <Image src="/thumbnail.png" rounded /> */}
    </Col>
    <Col xs={6} md={4}>
      {/* <Image src="/thumbnail.png" circle /> */}
    </Col>
    <Col xs={6} md={4}>
      {/* <Image src="/thumbnail.png" thumbnail /> */}
    </Col>
  </Row>
</Grid>
      // <Container>
      //   <div className="App">
      //    <div className="header">

      //     <PageHeader>
      //         Example page header <small>Subtext for header</small>
      //     </PageHeader>

      //     </div>
      //   <Button bsStyle="primary">Primary</Button>
      //   </div>

      //   </Container>
    )



    }
}


export default Menu

{/*<Grid>
    <Row className="show-grid">
      <Col xs={12} md={8}>
        <code>{<Col xs={12} md={8} />}</code>
      </Col>
      <Col xs={6} md={4}>
        <code>{<Col xs={6} md={4} />}</code>
      </Col>
    </Row>
  
    <Row className="show-grid">
      <Col xs={6} md={4}>
        <code>{<Col xs={6} md={4} />}</code>
      </Col>
      <Col xs={6} md={4}>
        <code>{<Col xs={6} md={4} />}</code>
      </Col>
      <Col xsHidden md={4}>
        <code>{<Col xsHidden md={4} />}</code>
      </Col>
    </Row>
  
    <Row className="show-grid">
      <Col xs={6} xsOffset={6}>
        <code>{<Col xs={6} xsOffset={6} />}</code>
      </Col>
    </Row>
  
    <Row className="show-grid">
      <Col md={6} mdPush={6}>
        <code>{<Col md={6} mdPush={6} />}</code>
      </Col>
      <Col md={6} mdPull={6}>
        <code>{<Col md={6} mdPull={6} />}</code>
      </Col>
    </Row>
    </Grid>
    ); */}

{/* <Grid>
    <Row className="show-grid">
      <Col xs={12} md={8}>
        <code>{'<Col xs={12} md={8} />'}</code>
      </Col>
      <Col xs={6} md={4}>
        <code>{'<Col xs={6} md={4} />'}</code>
      </Col>
    </Row>
  
    <Row className="show-grid">
      <Col xs={6} md={4}>
        <code>{'<Col xs={6} md={4} />'}</code>
      </Col>
      <Col xs={6} md={4}>
        <code>{'<Col xs={6} md={4} />'}</code>
      </Col>
      <Col xsHidden md={4}>
        <code>{'<Col xsHidden md={4} />'}</code>
      </Col>
    </Row>
  
    <Row className="show-grid">
      <Col xs={6} xsOffset={6}>
        <code>{'<Col xs={6} xsOffset={6} />'}</code>
      </Col>
    </Row>
  
    <Row className="show-grid">
      <Col md={6} mdPush={6}>
        <code>{'<Col md={6} mdPush={6} />'}</code>
      </Col>
      <Col md={6} mdPull={6}>
        <code>{'<Col md={6} mdPull={6} />'}</code>
      </Col>
    </Row>
    </Grid> */}