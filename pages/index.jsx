import Head from "next/head";
import { useCallback } from "react";
import { useAuth } from "../lib/auth";
import styles from "../styles/Home.module.css";

const Home = () => {
	const auth = useAuth();
	const signInWithGithub = useCallback(() => auth.signinWithGithub(), []);
	const signOut = useCallback(() => auth.signout(), []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Fast Feedback</h1>

				<p className={styles.description}>
					Get started by editing{" "}
					<code className={styles.code}>pages/index.js</code>
				</p>

				<button onClick={signInWithGithub}>Sign In</button>
				{auth?.user && <button onClick={signOut}>Sign Out</button>}
				<div>{auth?.user?.email}</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</div>
	);
};

export default Home;
