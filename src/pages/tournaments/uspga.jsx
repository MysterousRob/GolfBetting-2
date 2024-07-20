import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function UsPga() {
  return (
    <div>
      <Header />
      <div className="m-1.25 p-3 inline-block flex-row content-center box-border flex-1 min-w-[240px]">
        <h1 className="text-2xl font-bold text-center text-yellow-500">USA PGA Championship</h1>
        <br />
        <p className="text-lg font-serif indent-4 text-center text-white">
          The US PGA Championship, one of golf's major tournaments, showcases
          the world's top players battling for supremacy on diverse courses
          across the United States, delivering thrilling moments and intense
          competition.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default UsPga;
