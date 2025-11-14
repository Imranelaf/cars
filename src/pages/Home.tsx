import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar";



export default function Home() {

  return (
    <section className="bgColor w-full h-fit">
      <div className="p-5">
        <NavBar />
      </div>
       <Hero />
    </section>
  
  );
}
