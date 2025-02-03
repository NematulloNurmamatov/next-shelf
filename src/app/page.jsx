import Buy from "./buy/page";
import Canada from "./canada/page";
import Education from "./education/page";
import Header from "./header/page";
import Navbar from "./navbar/page";
import Recently from "./recently/page";
import Testimonials from "./testimonials/page";
import Weed from "./weed/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Buy />
      <Testimonials />
      <Weed />
      <Canada />
      <Recently />
      <Education />
    </div>
  );
}
