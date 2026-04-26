import { useState } from "react";
import "./Library.css";

import MainLayout from "../../components/layout/MainLayout/MainLayout";

import SearchBar from "./components/SearchBar/SearchBar";
import FilterTabs from "./components/FilterTabs/FilterTabs";
import ExerciseGrid from "./components/ExerciseGrid/ExerciseGrid";

export default function Library() {
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [search, setSearch] = useState("");

  return (
    <MainLayout>
      <section className="library">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <FilterTabs
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        <ExerciseGrid
          selectedFilter={selectedFilter}
          search={search}
        />
      </section>
    </MainLayout>
  );
}