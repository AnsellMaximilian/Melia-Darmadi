import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import showingFoodSVG from "../public/images/woman-showing-food.svg";
export default function Home() {
  return (
    <Layout>
      <section className="hero coloured">
        <div className="container">
          <div className="pb-3 pt-5 flex flex-justify-between flex-align-center">
            <div>
              <h1 className="hero__title mb-1">Melia Darmadi</h1>
              <p className="hero__subtitle mb-3">
                Menyediakan banyak pilihan makanan
              </p>
              <Link href="/makanan">
                <a className="btn btn-primary-negative cta d-inline-block">
                  Lihat <i className="fas fa-arrow-right"></i>
                </a>
              </Link>
            </div>
            <div className="w-50">
              <Image src={showingFoodSVG} alt="hero" />
            </div>
          </div>
        </div>
        <div className="flex flex-align-end">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,112C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      <section className="container">
        <h2 className="align-c mb-5">Pesan</h2>
        <div className="flex flex-wrap flex-justify-around">
          <div className="card">
            <div className="avatar">
              <div className="fas fa-store avatar__icon"></div>
            </div>
            <div className="card__content">
              <h3 className="card__title">Tokopedia</h3>
              <p>Pesan online melalui Tokopedia</p>
            </div>
          </div>
          <div className="card">
            <div className="avatar">
              <div className="fas fa-store avatar__icon"></div>
            </div>
            <div className="card__content">
              <h3 className="card__title">Tokopedia</h3>
              <p>
                Pesan online melalui Tokopedia. Jangan begitulah bro... Ayo...
                C&apos;mon! Pesan online melalui Tokopedia. Jangan begitulah
                bro... Ayo... C&apos;mon!
              </p>
            </div>
          </div>
          <div className="card">
            <div className="avatar">
              <div className="fas fa-store avatar__icon"></div>
            </div>
            <div className="card__content">
              <h3 className="card__title">Tokopedia</h3>
              <p>Pesan online melalui Tokopedia</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
