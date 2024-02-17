import CategorySection from "@/components/category section";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-between  justify-center">
      <Header />
      <CategorySection/>
    </main>
  );
}
