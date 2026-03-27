import { MainSection } from "@/components/Main";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Nav />
        <main>
          <MainSection />
        </main>
      </div>
    </>
  );
}
