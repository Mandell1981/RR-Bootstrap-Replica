
import {Container, Row, Col, Image} from 'react-bootstrap'

function StoreList () {
    return (
        <div className="List">
        <h2>Browse stores in Houston</h2>
<Container style={{ marginTop: "40px", textAlign: "center" }}>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row>
            <Col xs=".5" >
                <Image src="https://www.instacart.com/image-server/68x/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5" >
                <Image src="https://www.instacart.com/image-server/68x/www.instacart.com/assets/domains/warehouse/logo/231/30647104-9adb-4346-babc-3757295650b8.png" roundedCircle />
            </Col>
            <Col md="6">
                <h5 style={{ fontWeight: "bold" }}>Wegmans</h5>
                <p>Delivery</p>
            </Col>
        </Row>
        <Row >
            <Col xs=".5">
                <Image src="https://www.instacart.com/image-server/68x/www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row>
            <Col xs=".5" >
                <Image src="https://www.instacart.com/image-server/68x/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5">
                <Image src="https://www.instacart.com/image-server/68x/www.instacart.com/assets/domains/warehouse/logo/279/b6a0666c-e18e-4be3-a7a9-22def804a290.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5" >
                <Image src="https://www.instacart.com/image-server/68x/www.instacart.com/assets/domains/warehouse/logo/231/30647104-9adb-4346-babc-3757295650b8.png" roundedCircle />
            </Col>
            <Col md="6">
                <h5 style={{ fontWeight: "bold" }}>Wegmans</h5>
                <p>Delivery</p>
            </Col>
        </Row>
    </Row>
    </Container>
    </div>

    )
}

export default StoreList