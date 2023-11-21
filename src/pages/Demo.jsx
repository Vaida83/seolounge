import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Services } from "../components/Services";

export function DemoPage() {
  return (
    <div>
      <Header />
      <main>
        <Services />
        <Services />
      </main>
      <Footer />
    </div>
  );
}