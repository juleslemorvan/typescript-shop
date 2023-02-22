
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem"
import dataItems from "../data/items.json"

const Store = () => {
    return (
        <>
       <h1>Store</h1>
       <Row xs={1} md={2} lg={3} className="g-3" >
        {dataItems.map(item => (
            <Col key={item.id}><StoreItem {...item}/></Col>
        ))}
       </Row>

       </>
    );
};

export default Store;