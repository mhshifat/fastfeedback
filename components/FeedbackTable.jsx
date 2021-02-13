import DeleteFeedbackButton from "@/components/DeleteFeedbackButton";
import { Table, Td, Th, Tr } from "@/components/Table";
import { Box, Code, Switch } from "@chakra-ui/react";
import React from "react";

const FeedbackTable = (props) => {
	return (
		<Table>
			<thead>
				<Tr>
					<Th>Name</Th>
					<Th>Feedback</Th>
					<Th>Route</Th>
					<Th>Visible</Th>
					<Th width="50px">{""}</Th>
				</Tr>
			</thead>
			<tbody>
				{props.feedback.map((feedback) => (
					<Box as="tr" key={feedback.id}>
						<Td fontWeight="medium">{feedback.author}</Td>
						<Td>{feedback.text}</Td>
						<Td>
							<Code>{feedback.route || "/"}</Code>
						</Td>
						<Td>
							<Switch
								color="green"
								defaultIsChecked={feedback.status === "active"}
							/>
						</Td>
						<Td>
							<DeleteFeedbackButton feedbackId={feedback.id} />
						</Td>
					</Box>
				))}
			</tbody>
		</Table>
	);
};

export default FeedbackTable;
