import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import '../styling/components/NavBar.css'
import { NavLink } from "react-router-dom"; // React Router component for navigation


// This is the functional component for the Navigation component. It is 
// responsible for redirecting to other pages via clicking on the links.
function NavBar() {

    // Inline style for active navigation link
    let activeNavStyle = {
        textDecorationThickness: 4,
        textDecorationColor: "white",
        textDecorationLine: "underline"
    }

    return (
        <Row xs={4} className="navbar-container">
            <Col className="navbar-item">
                <NavLink className="navbar-link" to="/" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <h6>Products Page</h6>
                </NavLink>
            </Col>
            <Col className="navbar-item">
                <NavLink className="navbar-link" to="/addproducts" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <h6>Add Products</h6>
                </NavLink>
            </Col>
            
        </Row>
    )
}

export default NavBar;