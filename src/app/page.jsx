import Buy from "./buy/page";
import Header from "./header/page";
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Buy />
    </div>
  );
}
