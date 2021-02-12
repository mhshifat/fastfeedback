import { useAuth } from "@/lib/auth";
import { Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
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
			maxW="400px"
			margin="0 auto"
		>
			<Head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
                if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                  window.location.href = "/dashboard"
                }
              `,
					}}
				/>
				<title>Fast Feedback</title>
			</Head>

			<FastFeedbackIcon color="black.500" boxSize="42px" mb={2} />

			<Text mb={4}>
				<Text as="span" fontWeight="bold" display="inline">
					Fast Feedback
				</Text>
				{" is being built as part of "}
				<Link
					href="https://react2025.com"
					isExternal
					textDecoration="underline"
				>
					React 2025
				</Link>
				{`. It's the easiest way to add comments or reviews to your static site. It's still a work-in-progress, but you can try it out by logging in.`}
			</Text>

			{auth.user ? (
				<Button as="a" size="sm" fontWeight="medium" href="/dashboard">
					View Dashboard
				</Button>
			) : (
				<Button mt={4} size="sm" fontWeight="medium" onClick={signInWithGithub}>
					Sign In
				</Button>
			)}
		</Flex>
	);
};

export default Home;
