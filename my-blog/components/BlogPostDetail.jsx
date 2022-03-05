import { Col, Row } from "antd";
import BlockContent from "@sanity/block-content-to-react";
import SyntaxHighlighter from "react-syntax-highlighter";

const serializers = {
  types: {
    code: ({ node }) => {
      const { code } = node;
      return (
        <SyntaxHighlighter language="javascript" style={{}}>
          {code}
        </SyntaxHighlighter>
      );
    },
    video: ({ node }) => {
      return <SyntaxHighlighter>video</SyntaxHighlighter>;
    },
    link: ({ node }) => {
      return <SyntaxHighlighter>link</SyntaxHighlighter>;
    },
    imageGallery: ({ node }) => {
      return <SyntaxHighlighter>imageGallery</SyntaxHighlighter>;
    },
  },
};

export default function BlogPostDetail({ blocks }) {
  return (
    <>
      <Row>
        <Col span={24}>
          <BlockContent
            blocks={blocks}
            projectId={process.env.SANITY_PROJECT_ID}
            dataset="production"
            serializers={serializers}
          />
        </Col>
      </Row>
    </>
  );
}
