import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import GenericCard from "../components/generics/GenericCard";
import { Gender } from "../models/gender.model";
import { Product } from "../models/product.model";

const GenderScreen = () => {
  const [genders, setGenders] = useState([]);
  const { id } = useParams();
  const genderRef = useRef(null);
  const productsRef = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      const genders = Gender.from(
        await (await fetch("/data/gender.json")).json()
      );
      if (id) {
        const products = Product.from(
          await (await fetch("/data/product.json")).json()
        );
        genderRef.current = genders.find((c) => c.id === +id);
        productsRef.current = products.filter((p) => p.gender_id === +id);
      }
      setGenders(genders);
    };
    fetchData().catch(console.error);
  }, [id]);

  console.log(genders);

  const gender = genderRef.current;
  console.log(gender);
  const products = productsRef.current;
  console.log(products);

  return (
    <>
      <h1>GenderScreen</h1>
      {!id && (
        <div className="row">
          {genders.map((g) => {
            return (
              <div className="col-12 col-sm-6 col-lg-4 p-2" key={g.id}>
                <GenericCard
                  title={g.title}
                  text={g.description}
                  textTrunc={200}
                  imgSrc={g.image}
                  route={"/gender/" + g.id}
                />
              </div>
            );
          })}
        </div>
      )}
      {gender && (
        <div className="row">
          <h2>Genre {gender.title}</h2>
          {products.map((p) => {
            return (
              <div key={p.id}>
                {p.title} : {p.price.toFixed(2)}€
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default GenderScreen;
