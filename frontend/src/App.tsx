import { useState, useCallback } from "react";
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
    <div className="app">
      {/* <Header /> */}
      <div className="bg-blue-500 text-white p-10">Hello Tailwind!</div>

      <main className="main-content">
        <section className="hero">
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
