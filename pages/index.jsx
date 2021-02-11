import { useAuth } from "@/lib/auth";
import { Button, Code, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useCallback } from "react";

const Home = () => {
	const auth = useAuth();
	const signInWithGithub = useCallback(() => auth.signinWithGithub(), []);
	const signOut = useCallback(() => auth.signout(), []);

	return (
		<div>
			<Head>
				<title>Fast Feedback</title>
			</Head>

			<main>
				<Heading>Fast Feedback</Heading>

				<Text>
					Current user: <Code>{auth.user ? auth.user.email : "None"}</Code>
				</Text>

				{auth.user ? (
					<Button onClick={signOut}>Sign Out</Button>
				) : (
					<Button onClick={signInWithGithub}>Sign In</Button>
				)}
			</main>
		</div>
	);
};

export default Home;
