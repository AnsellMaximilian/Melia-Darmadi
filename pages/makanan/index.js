import React from "react";
import { createClient } from "contentful";
import Image from "next/image";
import styles from "../../styles/pages/Makanan.module.scss";
import Link from "next/link";
import Layout from "../../components/Layout";

export async function getStaticProps() {
  const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const dishes = (
    await contentfulClient.getEntries({
      content_type: "dish",
    })
  ).items.map((dish) => {
    const {
      sys: { id },
      fields: {
        name,
        shortDescription: description,
        thumbnail: {
          fields: {
            file: { url: imageUrl },
          },
        },
      },
    } = dish;
    return { id, name, description, imageUrl };
  });

  return {
    props: {
      dishes,
    },
  };
}

export default function Makanan({ dishes }) {
  return (
    <Layout makanan>
      <div className="container">
        <h1 className="page-title">Pilihan Makanan</h1>
        <div className={styles["dish-list"]}>
          {dishes.map((dish) => (
            <div key={dish.id} className={styles["dish-item"]}>
              <div className={styles["thumbnail-container"]}>
                <Image
                  src={"https:" + dish.imageUrl}
                  alt={dish.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles["details"]}>
                <h3 className={styles["dish-name"]}>{dish.name}</h3>
                <p>{dish.description}</p>
              </div>
              <div className={styles["toolbar"]}>
                <Link href={`/makanan/${dish.id}`}>
                  <a>
                    <button className="btn btn-primary">Lihat</button>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
