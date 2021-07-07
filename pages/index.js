import Layout from "../components/Layout";
import Image from "next/image";
import showingFoodSVG from "../public/images/woman-showing-food.svg";
export default function Home() {
  return (
    <Layout>
      <section className="hero coloured">
        <div className="container flex flex-justify-around flex-align-center">
          <div>
            <h1 className="hero__title mb-1">Melia Darmadi</h1>
            <p className="hero__subtitle mb-3">
              Menyediakan banyak pilihan makanan
            </p>
            <button className="btn btn-primary-negative cta">Lihat</button>
          </div>
          <div className="w-50">
            <Image src={showingFoodSVG} alt="hero" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
