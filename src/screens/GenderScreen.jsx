import { useEffect, useState } from "react";
import GenericCard from "../components/generics/genericCard";
import { Gender } from "../models/gender.model";

const GenderScreen = () => {

const [genders, setGenders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = Gender.from(
        await (await fetch("/data/gender.json")).json()
      );
      setGenders(data);
    };
    fetchData().catch(console.error);
  }, []);

  console.log(genders);

  return (
    <>
      <h1>GenderScreen</h1>
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
    </>
  );
}

export default GenderScreen;