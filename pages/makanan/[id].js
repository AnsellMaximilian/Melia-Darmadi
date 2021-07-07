import React from "react";
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/pages/MakananDetail.module.scss";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import Layout from "../../components/Layout";

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const paths = (
    await contentfulClient.getEntries({
      content_type: "dish",
    })
  ).items.map((dish) => ({
    params: { id: dish.sys.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const {
    fields: {
      name,
      shortDescription: description,
      recipe = "Recipe Unavailable",
      thumbnail: {
        fields: {
          file: { url: imageUrl },
        },
      },
    },
  } = await contentfulClient.getEntry(params.id);
  return {
    props: {
      dish: {
        name,
        description,
        imageUrl,
        recipe,
      },
    },
  };
}

export default function DetailMakanan({ dish }) {
  return (
    <Layout makanan>
      <div className="mb-5">
        <div className={`${styles["header"]} position-relative`}>
          <Link href="/makanan">
            <a className="fixed-element fixed-element-top-right">
              <button className="btn btn-primary">&#8592; Kembali</button>
            </a>
          </Link>
          <div className={styles["thumbnail-container"]}>
            <Image
              src={"https:" + dish.imageUrl}
              alt={dish.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles["header__details"]}>
            <h1 className="mb-3 hero__title">{dish.name}</h1>
            <p className="hero__subtitle">{dish.description}</p>
          </div>
        </div>
      </div>
      <div className="margin-center mb-5">
        <Image
          src="/images/woman-cooking.png"
          alt="woman cooking"
          className="image image-medium"
          height={300}
          width={400}
        />
      </div>
      {dish.recipe !== "Recipe Unavailable" && (
        <div className={`${styles["recipe"]} container`}>
          <h3 className="mb-3">Resep</h3>
          <div
            className="rich-text"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(dish.recipe),
            }}
          ></div>
        </div>
      )}
    </Layout>
  );
}
