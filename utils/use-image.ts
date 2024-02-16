import path from "path";

export default function useGetImage({
  src,
  dir,
}: {
  src: string;
  dir: "header" | "navbar";
}): string {
  return `/image/${dir}/` + src;
}
