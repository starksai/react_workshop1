import './Navbar.css'
import { Navbar, Nav, Button } from "react-bootstrap";

export default function Navbar1() {

    return (
        <>

            <Navbar expand="md" id='navbar' className='Navbar'  data-bs-theme="dark"  >

                <Navbar.Brand href="#home" id='navBrand'>RecipeTeller</Navbar.Brand>
                <Navbar.Toggle className="navbarToggle" ></Navbar.Toggle>
                <Navbar.Collapse className="collapse" style={{ justifyContent: "flex-end", gap: "20px" }}>


                    <Nav.Link href="#home" style={{ color: "white" }}>Home</Nav.Link>
                    <Nav.Link href="#features" style={{ color: "white" }}>Features</Nav.Link>
                    <Button variant="light">sign Up</Button>
                    <Button variant="light">sign In</Button>
                </Navbar.Collapse>



            </Navbar>


        </>
    )
}