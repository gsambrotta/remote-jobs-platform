import type { ApiResponse, SearchParams } from '../types/api.types';
import type { Job } from '../types/jobs.types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new ApiError(error.message || `HTTP ${response.status}`, response.status);
  }
  const data: ApiResponse<T> = await response.json();
  return data.data;
};

const buildUrl = (endpoint: string, params?: SearchParams): string => {
  const url = new URL(`${API_BASE_URL}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.append(key, String(value));
      }
    });
  }
  return url.toString();
};

export const fetchJobs = async (params: SearchParams): Promise<Job[]> => {
  const response = await fetch(buildUrl('/jobs', params), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return handleResponse<Job[]>(response);
};

// export const fetchFilterOptions = async (): Promise<FilterOptions> => {
//   const response = await fetch(buildUrl('/jobs/filters'), {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return handleResponse<FilterOptions>(response);
// };

// export const fetchJobById = async (id: string): Promise<Job> => {
//   const response = await fetch(buildUrl(`/jobs/${id}`), {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return handleResponse<Job>(response);
// };
