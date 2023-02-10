import React from "react";
import styles from "./home.module.css";
import Link from "@docusaurus/Link";

const DocRedirectCard = ({ title, description, docLink }) => {
  return (
    <div className={styles.docCard}>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={docLink}>
        <Link className="button button--secondary button--lg" to={docLink}>
          Read
        </Link>
      </a>
    </div>
  );
};

export default DocRedirectCard;
