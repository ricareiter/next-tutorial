import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs Tutorial</title>
      </Head>
      <h1 className={styles.homePageTitle}>Hello World!</h1>
    </div>
  );
}
