import { useRouter } from "next/router";
import sanityClient from "@sanity/client";

export default function postAll() {
  const router = useRouter();

  const { slug } = router.query;

  console.log(router.query);
  return (
    <div>
      <h1>Post : {slug}</h1>
    </div>
  );
}

export function getStaticPaths() {
  
  return {
    paths: [{params: {slug: 'my-blog-test'}}]
    fallback:
  }

  // sanity로 부터 데이터를 가져온다.
  const client = sanityClient({
    dataset: "production",
    projectId: "gp7gjuwc",
    useCdn: process.env.NODE_ENV === "production",
  });

  const posts = await client.fetch(`
    *[_type == 'post']{
      title, 
      subtitle, 
      createdAt, 
      'content': content[]{
        ..., 
        ...select(_type == 'imageGallery' => {'images': images[]{..., 'url': asset -> url}})
      },
      'slug': slug.current,
      'thumbnail': {
        'alt': thumbnail.alt,
        'imageUrl': thumbnail.asset -> url
      },
      'author': author -> {
        name,
        role,
        'image': image.asset -> url
      },
      'tag': tag -> {
        title,
        'slug': slug.current
      }
    }
  `);
}
