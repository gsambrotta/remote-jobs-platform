import { useState, useCallback, useEffect } from 'react';
import { useDebounce } from './useDebounce';
import { fetchJobs } from '@services/api';
import type { Job, Filters } from '../types/jobs.types';

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
    // Wrap filters in useMemo to avoid new object reference each render
  const stableFilters = JSON.stringify(filters);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchJobs({ search: debouncedSearch, ...filters });
      setJobs(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, stableFilters]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { jobs, loading, error, refetch: fetchData };
};
