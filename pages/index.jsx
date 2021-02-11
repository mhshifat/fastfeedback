import { useAuth } from "@/lib/auth";
import { Button, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { FastFeedbackIcon } from "public/icons";
import { useCallback } from "react";

const Home = () => {
	const auth = useAuth();
	const signInWithGithub = useCallback(() => auth.signinWithGithub(), []);
	const signOut = useCallback(() => auth.signout(), []);

	return (
		<Flex
			as="main"
			direction="column"
			align="center"
			justify="center"
			h="100vh"
		>
			<Head>
				<title>Fast Feedback</title>
			</Head>

			<FastFeedbackIcon color="black.500" boxSize="64px" />

			{auth.user ? (
				<Button as="a" href="/dashboard">
					View Dashboard
				</Button>
			) : (
				<Button mt={4} size="sm" onClick={signInWithGithub}>
					Sign In
				</Button>
			)}
		</Flex>
	);
};

export default Home;
