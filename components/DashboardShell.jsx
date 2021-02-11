import { useAuth } from "@/lib/auth";
import {
	Avatar,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Flex,
	Heading,
	Link,
} from "@chakra-ui/react";
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
						<FastFeedbackIcon color="black.500" boxSize="24px" mr={8} />
						<Link mr={4}>Sites</Link>
						<Link>Feedback</Link>
					</Flex>
					<Flex justifyContent="center" alignItems="center">
						<Button variant="ghost" mr={2} onClick={signOut}>
							Log Out
						</Button>
						<Avatar size="sm" src={user.photoUrl} />
					</Flex>
				</Flex>
			</Flex>
			<Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
				<Breadcrumb>
					<BreadcrumbItem>
						<BreadcrumbLink>Sites</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
				<Flex justifyContent="space-between">
					<Heading mb={8}>My Sites</Heading>
					<Button
						backgroundColor="gray.900"
						color="white"
						fontWeight="medium"
						_hover={{ bg: "gray.700" }}
						_active={{
							bg: "gray.800",
							transform: "scale(0.95)",
						}}
					>
						+ Add Site
					</Button>
				</Flex>
				{children}
			</Flex>
		</Box>
	);
};

export default DashboardShell;
