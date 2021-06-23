import React from "react";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/pages/MakananDetail.module.scss";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

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
    <div>
      <div className="mb">
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
            <h1 className="mb ">{dish.name}</h1>
            <p className="">{dish.description}</p>
          </div>
        </div>
      </div>
      <div className={`${styles["recipe"]} container`}>
        <h3 className="mb">Resep</h3>
        <div
          className="rich-text"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(dish.recipe),
          }}
        ></div>
      </div>
    </div>
  );
}