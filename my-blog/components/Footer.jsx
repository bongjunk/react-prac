import { Col, Row } from "antd";

export default function Footer() {
  return (
    <Row align="middle" style={{ height: 50, textAlign: "right" }}>
      <Col span={24}>
        <p>&copy; 2022 Bongjun Kim. All rights reserved.</p>
      </Col>
    </Row>
  );
}
