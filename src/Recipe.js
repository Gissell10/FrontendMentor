import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './data.json'

export default function Recipe (){
return(
         <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                <Card>
                    <Card.Img variant="top" src="assets/images/image-brownie-desktop.jpg" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer 
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
         </Row>
);
}