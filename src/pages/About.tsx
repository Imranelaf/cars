import NavBar from "../components/NavBar";
import PageTransition from "../components/PageTransition";

export default function About() {

    return (
        <PageTransition>
        <section className="bgColor w-full min-h-screen h-fit">
            <div className="p-5">
                <NavBar />
            </div>

        </section>
        </PageTransition>
    )
}