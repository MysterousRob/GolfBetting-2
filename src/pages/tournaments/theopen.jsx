import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function TheOpen() {
  return (
    <div>
      <Header />
      <div className="m-1.25 p-3 inline-block flex-row content-center box-border flex-1 min-w-[240px]">
        <h1 className="text-2xl font-bold text-center text-yellow-500">
          The US <br /> Open
        </h1>
        <br />
        <p className="text-lg font-serif indent-4 text-center text-white">
          The US Open, one of golf's major championships, is a highly
          anticipated event that tests the skills and endurance of top players
          on challenging courses, captivating fans with its rich history and
          intense competition.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default TheOpen;
