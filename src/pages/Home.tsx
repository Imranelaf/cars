import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar";
import PageTransition from "../components/PageTransition";



export default function Home() {

  return (
    <PageTransition>
    <section className="bgColor w-full h-fit">
      <div className="p-5">
        <NavBar />
      </div>
       <Hero />
    </section>
    </PageTransition>
  
  );
}
