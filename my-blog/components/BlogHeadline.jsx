import { Col, Row } from "antd";

export default function BlogHeadline() {
  return (
    <Row align="middle" style={{ height: 300, textAlign: "center" }}>
      <Col span={24}>
        <h1 style={{ fontSize: 70, fontWeight: "bold" }}>Bong's Blog</h1>
        <p style={{ fontSize: 24 }}>
          React + Typescript 를 이용하여, 개발을 하고 있는 김봉준 입니다. 나이는
          29살 이고, 최신 웹기술에 대해 알아가는 것을 좋아합니다.
        </p>
      </Col>
    </Row>
  );
}
