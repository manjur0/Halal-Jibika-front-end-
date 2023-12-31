import { useEffect, useState } from "react";
import Categorie from "./Categorie";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/Catagory.json");
        if (!response) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="mx-auto max-w-7xl my-20">
      <div>
        <h1 className="text-left my-8 mt-40 text-5xl font-bold">
          Explore job by <span className="text-[#19A463]">Categories</span>
        </h1>
      </div>
      <div className="  grid grid-cols-1 mx-auto  gap-4 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Categorie key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
