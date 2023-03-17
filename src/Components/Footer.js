import { Button, Col, Row } from "react-bootstrap";
import { FiChevronUp } from "react-icons/fi";

const Footer = () => {
    return (
        <Row style={{ "minHeight": 3.5+"em"}}>
            <Col>
                <Button variant="light" className="float-end m-4 p-1" onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>
                    <FiChevronUp size={'30px'}></FiChevronUp>
                </Button>
            </Col>
        </Row>
    )
}

export default Footer;