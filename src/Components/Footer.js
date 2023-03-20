import { Button, Col, Row } from "react-bootstrap";
import { FiChevronUp } from "react-icons/fi";

const Footer = () => {
    return (
        <Row style={{ "minHeight": 3.5+"em"}}>
            <Col>
                <Button variant="" className="float-end m-4 p-1 text-light" onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>
                    <FiChevronUp size={'1.7em'}></FiChevronUp>
                </Button>
            </Col>
        </Row>
    )
}

export default Footer;