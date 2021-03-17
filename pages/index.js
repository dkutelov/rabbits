import Head from "next/head";
import QuestionForm from "../components/create-question-form/question-form.component";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rabbits project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-center bg-blue-300 py-8">Rabbits Project</h1>
        <QuestionForm />
      </main>

      <footer className={styles.footer}>Rabbits Project</footer>
    </div>
  );
}
