import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';
import { fetchJobs } from '@services/api';
import type { Job, Filters } from '@types/job.types';

interface UseJobsReturn {
  jobs: Job[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useJobs = (searchQuery: string, filters: Filters): UseJobsReturn => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearch = useDebounce(searchQuery, 300);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchJobs({
        search: debouncedSearch,
        ...filters
      });
      setJobs(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [debouncedSearch, filters]);

  return { jobs, loading, error, refetch: fetchData };
};
