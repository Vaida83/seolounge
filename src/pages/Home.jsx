import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Services } from "../components/Services";

export function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
}