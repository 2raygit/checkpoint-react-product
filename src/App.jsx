import imageProfil  from './assets/img.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Name from './components/name.jsx';
import Price from './components/price.jsx';
import Description from './components/description.jsx';
import Image from './components/image.jsx';
import product from './product';


const firstName = 'Cheikh';

function App() {
  return (
    <Container className="mt-5">
      <Card>
        <Row noGutters>
          <Col md={4}>
            <Image />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <div className="mt-3 text-center">
        {firstName ? <h3>Bonjour, {firstName}!</h3> : <p>Bonjour !</p>}
        {firstName && (<img src={imageProfil} alt={product.name}  style={{width: '300px', height: '300px', border: '2px solid #28a745',boxShadow: '0 4px 50px rgba(0, 0, 0, 0.2)',objectFit: 'cover', }}  className="img-fluid rounded-circle profile-img"/>)}
      </div>
    </Container>
  );
}

export default App;
