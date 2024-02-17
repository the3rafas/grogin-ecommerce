import { CategoriesData } from "@/constrains/data";
import CategoryCart from "../category cart";

export default function CategorySection() {
  return (
    <section className="w-8/12 mx-auto h-60  flex justify-between items-center">
      {CategoriesData.map((category, index) => (
        <CategoryCart key={index} category={category} />
      ))}
    </section>
  );
}
