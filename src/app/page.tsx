import { Description } from "./components/home/Description/description";
import { Hero } from "./components/home/Hero";
import { MainProducts } from "./components/home/MainProducts";


export default function Home() {

  return (
    <main>
      <Hero/>
      <Description/>
      <MainProducts/>
    </main>
  );
}
