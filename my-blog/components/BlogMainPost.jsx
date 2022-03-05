import { Card, Col, Row } from "antd";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";

export default function BlogMainPost({
  slug,
  thumbnail,
  title,
  subtitle,
  author,
  createAt,
}) {
  return (
    <Row align="middle" height="auto">
      <Col span={24}>
        <Link href={`/post/${slug}`}>
          <a>
            <Card
              style={{ border: "none" }}
              cover={
                <Image
                  alt={thumbnail?.alt}
                  src={thumbnail?.imageUrl}
                  width="640px"
                  height="320px"
                />
              }
            >
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
              <h4>
                {author?.name} · {dayjs(createAt).format("MMMM D")}
              </h4>
            </Card>
          </a>
        </Link>
      </Col>
    </Row>
  );
}
