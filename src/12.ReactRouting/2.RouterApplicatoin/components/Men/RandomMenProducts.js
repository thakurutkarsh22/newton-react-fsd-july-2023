import { useEffect } from "react";
import { useParams } from "react-router-dom";

function RandomMenProducts(props) {
  let params = useParams();
  const { id } = params;

  useEffect(() => {
    console.log("Hey making API CALL for " + id);
  }, [id]);

  return <div>Random men Product. {id}</div>;
}

export default RandomMenProducts;

// 'https/google.com/?q=ahahaha' -> q -> queryparams
// https/google.com/:id -> :id -> params
