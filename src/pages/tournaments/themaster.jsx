import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


//create each
function TheMasters() {
  return (
    <div>
      <Header />
      <div className="m-1.25 p-3 inline-block flex-row content-center box-border flex-1 min-w-[240px]">
        <h1 className="text-2xl font-bold text-center text-yellow-500">
          The <br /> Masters
        </h1>
        <br />
        <p className="text-lg font-serif indent-4 text-center text-white">
          The Masters Tournament at Augusta National Golf Club is a prestigious
          event in golf, showcasing top players and iconic moments, while also
          embracing the excitement of betting for fans worldwide.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default TheMasters;
