export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  salary?: {
    min?: number;
    max?: number;
    currency: string;
  };
  category: JobCategory;
  experienceLevel: ExperienceLevel;
  jobType: JobType;
  postedDate: string;
  applicationUrl: string;
  tags: string[];
  region: Region;
  isBookmarked?: boolean;
}

export type JobCategory =
  | 'Engineering'
  | 'Design'
  | 'Marketing'
  | 'Sales'
  | 'Support'
  | 'Product'
  | 'Data'
  | 'Other';

export type ExperienceLevel = 'Entry' | 'Mid' | 'Senior' | 'Lead';

export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';

export type Region = 'Balkans-friendly' | 'Africa-friendly' | 'Worldwide';

export interface FilterOptions {
  categories: JobCategory[];
  experienceLevels: ExperienceLevel[];
  jobTypes: JobType[];
  regions: Region[];
}

export interface Filters {
  category?: JobCategory;
  experienceLevel?: ExperienceLevel;
  jobType?: JobType;
  region?: Region;
  salaryMin?: number;
  salaryMax?: number;
}
