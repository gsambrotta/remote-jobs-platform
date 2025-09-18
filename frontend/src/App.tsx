// import { useState, useCallback } from "react";
// import Header from "./components/Layout/Header";
// import SearchBar from "@components/Search/SearchBar";
// import FilterPanel from "@components/Search/FilterPanel";
import JobList from "@components/JobList/JobList";
import LoadingSpinner from "@components/Common/LoadingSpinner";
import ErrorMessage from "@components/Common/ErrorMessage";
import { useJobs } from "@hooks/useJobs";
// import { Filters } from "./types/jobs.types.ts";

function App(): JSX.Element {
  // const [searchQuery, setSearchQuery] = useState<string>("");
  // const [filters, setFilters] = useState<Filters>({});
  // const { jobs, loading, error, refetch } = useJobs(searchQuery, filters);
  const { jobs, loading, error, refetch } = useJobs("", {});

  // const handleFilterChange = useCallback(
  //   (filterType: keyof Filters, value: any) => {
  //     setFilters((prev) => {
  //       if (value === undefined || value === null || value === "") {
  //         const { [filterType]: _, ...rest } = prev;
  //         return rest;
  //       }
  //       return { ...prev, [filterType]: value };
  //     });
  //   },
  //   []
  // );

  // const handleClearFilters = useCallback(() => {
  //   setFilters({});
  // }, []);

  return (
    <div className="app flex flex-col min-h-screen">
      <header className="bg-navy-blue text-white box-shadow-primary p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pakufi Jobs</h1>
        <button className="px-4 py-2 rounded">Post a Job</button>
      </header>

      <main className="flex-1 bg-river-bed-green pt-12 pb-12 pl-8 pr-8 main-content">
        <section className="text-center text-white-eeeeee text-2xl hero">
          <h1>100% Remote Jobs for Balkans & Africa</h1>
          <p>No visa required. Work from anywhere.</p>
        </section>

        {/* <section className="search-section">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by title, company, or skills..."
          />
        </section> */}

        <div className="content-wrapper">
          {/* <aside className="filters-sidebar">
            <FilterPanel
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </aside> */}

          <section className="jobs-section">
            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} onRetry={refetch} />}
            {!loading && !error && <JobList jobs={jobs} />}
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
