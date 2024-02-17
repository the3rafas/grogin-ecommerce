import useGetImage from "@/utils/use-image";

export default function CategoryCart({
  category,
}: {
  category: { image: string; name: string };
}) {
  return (
    <div className="w-1/9 flex items-center flex-col h-20 text-center justify-between">
      <div className="bg-gray-200 w-32 h-32 rounded-full">
        <img
          src={useGetImage({ src: category.image, dir: "category" })}
          alt=""
        />
      </div>
      <h6 className="text-sm	font-bold	">{category.name}</h6>
    </div>
  );
}
