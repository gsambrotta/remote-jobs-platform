import { memo } from "react";
import JobCard from "../JobCard/JobCard";
import type { JobListProps } from "../../types/index";
import styles from "./JobList.module.css";

const JobList = memo(({ jobs, className }: JobListProps): JSX.Element => {
  if (jobs.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>No jobs found</h3>
        <p>Try adjusting your filters or search query</p>
      </div>
    );
  }

  return (
    <div className={`${styles.jobList} ${className || ""}`}>
      <div className={styles.jobCount}>
        Found {jobs.length} job{jobs.length !== 1 ? "s" : ""}
      </div>
      <div className={styles.jobGrid}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
});

JobList.displayName = "JobList";

export default JobList;
