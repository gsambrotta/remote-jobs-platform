import { memo, useState } from "react";
import type { Job } from "../../types/jobs.types";

type JobCardProps = {
  job: Job;
  onBookmark?: (id: string) => void;
};

const JobCard = memo(({ job, onBookmark }: JobCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(job.isBookmarked || false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark?.(job.id);
  };

  return (
    <article className="bg-white border border-riverBedGreen rounded-lg p-6 box-shadow-black06 hover:box-shadow-primary transition-transition">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold">{job.title}</h3>
        <button
          onClick={handleBookmark}
          aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          className="text-acid-green text-2xl"
        >
          {isBookmarked ? "★" : "☆"}
        </button>
      </div>

      {/* Company / Short summary */}
      <div className="text-paragraph mb-3">
        <span className="text-dark-grey-blue text-xs">Company:</span>{" "}
        {job.short_summary || job.company}
      </div>

      {/* Meta info */}
      <div className="flex flex-wrap gap-2 text-sm text-dark-grey-blue mb-3">
        <span>{job.remote ? "Remote" : "On-site"}</span>
        <span>{job.visa_required ? "Visa Required" : "No Visa"}</span>
        <span>{new Date(job.date_fetched).toLocaleDateString()}</span>
      </div>

      {/* Skills tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills_required?.map((skill) => (
          <span
            key={skill}
            className="bg-mint-green text-white text-xs font-medium px-2 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Apply button */}
      <div className="flex justify-end">
        <a
          href={job.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dark-grey-blue text-white px-4 py-2 rounded hover:bg-mint-green transition-transition"
        >
          Check job offer →
        </a>
      </div>
    </article>
  );
});

JobCard.displayName = "JobCard";
export default JobCard;
