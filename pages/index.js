import Head from 'next/head';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='Ninjas' />
      </Head>
      <div className={styles.title}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro optio illo praesentium esse, cumque itaque beatae quisquam veniam
          iste ipsa, id et assumenda. Aperiam, facilis ea. Quas, placeat? Nisi, soluta?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro optio illo praesentium esse, cumque itaque beatae quisquam veniam
          iste ipsa, id et assumenda. Aperiam, facilis ea. Quas, placeat? Nisi, soluta?
        </p>
        <Link href={'/ninjas'} className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
