import { useEffect, useState } from "react";
import GenericCard from "../components/generics/genericCard";
import { Category } from "../models/category.model";

const CategoryScreen = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = Category.from(
        await (await fetch("/data/category.json")).json()
      );
      setCategories(data);
    };
    fetchData().catch(console.error);
  }, []);

  console.log(categories);

  return (
    <>
      <h1>CategoryScreen</h1>
      <div className="row">
        {categories.map((c) => {
          return (
            <div className="col-12 col-sm-6 col-lg-4 p-2" key={c.id}>
              <GenericCard
                title={c.title}
                text={c.description}
                textTrunc={200}
                imgSrc={c.image}
                route={"/category/" + c.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryScreen;
