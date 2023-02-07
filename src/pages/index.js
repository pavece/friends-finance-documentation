import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

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
              Host your bot
            </Link>
          </div>
        </div>
        <div className="hero-banner">
          <img
            src="/img/ff_banner.png"
            alt=""
            style={{ width: "30vw", borderRadius: "10px" }}
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
      title={`Hello from ${siteConfig.title}`}
      description="Friends finance bot. Manage your group debts easily and precisely">
      <HomepageHeader />
    </Layout>
  );
}
