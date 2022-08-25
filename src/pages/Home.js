import CardsComponent from "../components/CardsComponent";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import InMedia from "../components/InMedia";
import ThreeCards from "../components/ThreeCards";
import Trustedbacked from "../components/Trustedbacked";
import ViewOurDeals from "../components/ViewOurDeals";

function Home({show}) {
  return (
    <div className="">
      {/* header */}
      <Hero />
      <Trustedbacked />
      <CardsComponent show/>
      <InMedia />
      <ViewOurDeals />
      <Faq />
      <ThreeCards />
      {/* footer */}
    </div>
  );
}

export default Home;
