import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import DocRedirectCard from "../components/home/docRedirectCard";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      style={{
        padding: "10vh 0",
      }}>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          width: "100vw",
        }}>
        <div
          className="hero-text"
          style={{ maxWidth: "600px", textAlign: "left" }}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              style={{
                mr: "10px",
              }}
              to="/docs/intro">
              Documentation
            </Link>
          </div>
        </div>
        <div className={styles['hero-banner']}>
          <img
            src="/img/ff_banner.png"
            alt=""
            style={{ width: "calc(300px + 10vw)", borderRadius: "10px" }}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Friends finance bot. Manage your group debts easily and precisely">
      <HomepageHeader />
      <section className={styles["redirects-section"]}>
        <DocRedirectCard
          title="Learn how to host your own bot"
          description="Learn how to host the bot and choose the best hosting option (including free ones). Configure the database, environment variables, and discord developer app and you are ready to go."
          docLink="/docs/category/hosting-the-bot"
        />

        <DocRedirectCard
          title="Read the commands guide"
          description="Learn how to use all the commands properly. Know the parameters and end up using the bot seamlessly"
          docLink="/docs/category/command-guide"
        />
      </section>
    </Layout>
  );
}
