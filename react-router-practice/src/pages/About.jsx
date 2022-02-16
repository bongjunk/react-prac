import { useSearchParams } from "react-router-dom";

export default function About() {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get('name')); // bong
  console.log(searchParams.entries()); // Iterator {} - 우리가 반복할 수 있다는 것을 의미
  // const obj = new URLSearchParams(searchParams);
  // console.log(obj.get('name')); // bong
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    console.log(param + '=' + value);
  }
  return <div>About</div>
}