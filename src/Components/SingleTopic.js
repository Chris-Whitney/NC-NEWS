import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function SingleTopic() {
  const { topic_slug } = useParams();

  console.log(topic_slug);

  const [singleTopic, setSingleTopic] = useState([]);

//   useEffect(() => {
//       getSingleTopic()
//   }, []);

  return (
    <div>
      <h1>single topic </h1>
    </div>
  );
}
