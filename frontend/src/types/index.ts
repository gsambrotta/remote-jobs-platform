export * from './jobs.types';
export * from './api.types';

// Component Props Types
export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export interface FilterPanelProps {
  filters: Filters;
  onFilterChange: (filterType: keyof Filters, value: any) => void;
  onClearFilters: () => void;
  className?: string;
}

export interface JobListProps {
  jobs: Job[];
  loading?: boolean;
  className?: string;
}

export interface JobCardProps {
  job: Job;
  onBookmark?: (jobId: string) => void;
  className?: string;
}

export interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

export interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}
