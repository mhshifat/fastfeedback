import DashboardShell from "@/components/DashboardShell";
import EmptyState from "@/components/EmptyState";
import SiteTable from "@/components/SiteTable";
import SiteTableSkeleton from "@/components/SiteTableSkelaton";
import { useAuth } from "@/lib/auth";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";

const Dashboard = () => {
	const auth = useAuth();
	const { data } = useSWR("/api/sites", fetcher);

	console.log(data);

	if (!data)
		return (
			<DashboardShell>
				<SiteTableSkeleton />
			</DashboardShell>
		);
	return (
		<DashboardShell>
			{!data.length ? <EmptyState /> : <SiteTable sites={data} />}
		</DashboardShell>
	);
};

export default Dashboard;
