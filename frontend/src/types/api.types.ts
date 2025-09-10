export interface ApiResponse<T> {
  success: boolean;
  data: T;
  total?: number;
  message?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}

export interface SearchParams {
  search?: string;
  category?: string;
  experienceLevel?: string;
  jobType?: string;
  region?: string;
  salaryMin?: number;
  salaryMax?: number;
  page?: number;
  limit?: number;
}
