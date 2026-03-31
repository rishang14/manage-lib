import { auth } from "@/auth";
import { FeaturesSection } from "@/components/Feature";
import { Footer } from "@/components/Footer";
import { MainSection } from "@/components/Main";
import Nav from "@/components/Nav";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("data", session);
  if (session) {
    redirect("/home");
  }
  return (
    <>
      <Nav />
      <main>
        <MainSection />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
}
