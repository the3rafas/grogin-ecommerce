import path from "path";

export default function useGetImage({
  src,
  dir,
}: {
  src: string;
  dir: "header" | "navbar"|"category" | "footer" | "product" | "div.slick-list";
}): string {
  return `/image/${dir}/` + src;
}
