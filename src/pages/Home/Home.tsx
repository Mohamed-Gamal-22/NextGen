import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Links from "../../components/Links/Links";
import Portfolio from "../../components/Portfolio/Portfolio";
import Trusted from "../../components/Trusted/Trusted";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Trusted />
      <Portfolio />
      <Contact />
      <Links />
    </div>
  );
}
