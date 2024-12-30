import Blog from "./components/blog card";
import Contact from "./components/contact";
import Categories from "./components/feature";
import Herosection from "./components/herosection";

export default function Home() {
  return (
   <main className='bg-[#d8d8d8]'>
    <Herosection />
    <Categories />
    <Blog />
    <Contact />
   </main>
  );
}
