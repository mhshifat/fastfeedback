import AddSiteModal from "@/components/AddSiteModal";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Flex,
	Heading,
} from "@chakra-ui/react";
import React from "react";

const SiteTableHeader = () => (
	<>
		<Breadcrumb>
			<BreadcrumbItem>
				<BreadcrumbLink>Sites</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
		<Flex justifyContent="space-between">
			<Heading mb={8}>My Sites</Heading>
			<AddSiteModal>+ Add Site</AddSiteModal>
		</Flex>
	</>
);

export default SiteTableHeader;
