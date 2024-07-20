import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function OpenChamp() {
  return (
    <div>
      <Header />
      <div className="m-1.25 p-3 inline-block flex-row content-center box-border flex-1 min-w-[240px]">
        <h1 className="text-2xl font-bold text-center text-yellow-500">The Open Championship</h1>
        <br />
        <p className="text-lg font-serif indent-4 text-center text-white">
          The Open Championship, often referred to as the "British Open," is one
          of golf's oldest and most prestigious tournaments, steeped in
          tradition and held on iconic links courses in the United Kingdom.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default OpenChamp;
