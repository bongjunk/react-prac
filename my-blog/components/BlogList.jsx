import { Card, Col, Row } from "antd";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";

export default function BlogList({ posts }) {
  return (
    <>
      <Row aligh="middle" style={{ height: 100 }}>
        <Col span={24}>
          <h1 style={{ fontSize: 30, fontWeight: "bold" }}>Lastest Posts</h1>
        </Col>
      </Row>
      <Row gutter={16} align="top" style={{ height: "auto" }}>
        {posts.map((post) => {
          return (
            <Col span={6} key={post.id}>
              <Link href={`/post/${post.slug}`}>
                <a>
                  <Card
                    style={{ width: "100%", border: "none", marginBottom: 30 }}
                    cover={
                      <Image
                        src={post.thumbnail.imageUrl}
                        alt={post.thumbnail.alt}
                        width="640px"
                        height="320px"
                      />
                    }
                  >
                    <h3>{post.title}</h3>
                    <h4>
                      {post.author.name} ·{" "}
                      {dayjs(post.createdAt).format("MMMM D")}
                    </h4>
                  </Card>
                </a>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
