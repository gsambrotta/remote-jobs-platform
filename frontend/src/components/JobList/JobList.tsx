import { memo } from "react";
import JobCard from "../JobCard/JobCard";
import type { JobListProps } from "../../types/index";

const JobList = memo(({ jobs }: JobListProps): JSX.Element => {
  if (jobs.length === 0) {
    return (
      <div className="text-center text-paragraph mt-10">
        <h3 className="text-lg font-semibold">No jobs found</h3>
        <p>Try adjusting your filters or search query</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="mb-4 text-gray-700 font-medium">
        Found {jobs.length} job{jobs.length !== 1 ? "s" : ""}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
});

JobList.displayName = "JobList";
export default JobList;
