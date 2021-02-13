import { useAuth } from "@/lib/auth";
import { Avatar, Box, Button, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FastFeedbackIcon } from "public/icons";
import React, { useCallback } from "react";

const DashboardShell = ({ children }) => {
	const { user, signout } = useAuth();
	const signOut = useCallback(() => signout(), []);

	return (
		<Box backgroundColor="gray.100" h="100vh">
			<Flex backgroundColor="white" mb={16} w="full">
				<Flex
					alignItems="center"
					justifyContent="space-between"
					pt={4}
					pb={4}
					maxW="1250px"
					margin="0 auto"
					w="full"
					px={8}
				>
					<Flex>
						<NextLink href="/" passHref>
							<Link>
								<FastFeedbackIcon color="black.500" boxSize="24px" mr={8} />
							</Link>
						</NextLink>
						<NextLink href="/dashboard" passHref>
							<Link mr={4}>Sites</Link>
						</NextLink>
						<NextLink href="/feedback" passHref>
							<Link>Feedback</Link>
						</NextLink>
					</Flex>
					<Flex justifyContent="center" alignItems="center">
						{user && (
							<Button variant="ghost" mr={2} onClick={signOut}>
								Log Out
							</Button>
						)}
						<Avatar size="sm" src={user?.photoUrl} />
					</Flex>
				</Flex>
			</Flex>
			<Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
				{children}
			</Flex>
		</Box>
	);
};

export default DashboardShell;
