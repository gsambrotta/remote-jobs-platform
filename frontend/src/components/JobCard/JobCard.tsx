import { memo, useState } from "react";
import type { JobCardProps } from "../../types/index";
import { formatDate, formatSalary } from "@utils/helpers";
import styles from "./JobCard.module.css";

const JobCard = memo(
  ({ job, onBookmark, className }: JobCardProps): JSX.Element => {
    const [isBookmarked, setIsBookmarked] = useState(job.isBookmarked || false);

    const handleBookmark = () => {
      setIsBookmarked(!isBookmarked);
      onBookmark?.(job.id);
    };

    return (
      <article className={`${styles.jobCard} ${className || ""}`}>
        <div className={styles.jobHeader}>
          <h3 className={styles.jobTitle}>{job.title}</h3>
          <button
            className={styles.bookmarkBtn}
            onClick={handleBookmark}
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            {isBookmarked ? "★" : "☆"}
          </button>
        </div>

        <div className={styles.jobCompany}>{job.company}</div>

        <div className={styles.jobMeta}>
          <span className={styles.jobLocation}>{job.location}</span>
          <span className={styles.jobType}>{job.jobType}</span>
          <span className={styles.jobLevel}>{job.experienceLevel}</span>
        </div>

        {job.salary && (
          <div className={styles.jobSalary}>{formatSalary(job.salary)}</div>
        )}

        <p className={styles.jobDescription}>
          {job.description.length > 150
            ? `${job.description.substring(0, 150)}...`
            : job.description}
        </p>

        <div className={styles.jobTags}>
          {job.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.jobFooter}>
          <span className={styles.postedDate}>
            {formatDate(job.postedDate)}
          </span>
          <a
            href={job.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.applyBtn}
          >
            Apply Now →
          </a>
        </div>
      </article>
    );
  }
);

JobCard.displayName = "JobCard";

export default JobCard;
