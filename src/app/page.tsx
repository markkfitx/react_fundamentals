
import Header from "@/components/header"
import Hero from "@/components/Hero/hero"

export default function Home() {
  return (
    <>
    <section className="main-content min-h-[100dvh] w-full h-max bg-image">
        <div className="bg-cover"></div>
        <div className="flex flex-col w-full xl:px-40 lg:px-35 md:px-25 sm:px-15" id="main-wrapper">
          <Header />
          <main className="h-full">
            <Hero/>
          </main>
        </div>
    </section>
    <footer></footer>
    </>
  );
}
