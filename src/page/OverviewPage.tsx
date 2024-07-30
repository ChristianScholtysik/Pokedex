import Header from "../components/Header/Header";
import AllPokemons from "../components/Overview/AllPokemons";

const OverviewPage = () => {
  return (
    <>
      <section className="overview-wrapper">
        <Header />
        <AllPokemons />
      </section>
    </>
  );
};

export default OverviewPage;
