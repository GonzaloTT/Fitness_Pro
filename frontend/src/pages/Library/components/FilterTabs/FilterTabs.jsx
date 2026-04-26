import "./FilterTabs.css";

export default function FilterTabs({
  selectedFilter,
  setSelectedFilter
}) {
  const filters = [
    "Todos",
    "Pecho",
    "Espalda",
    "Piernas",
    "Core",
    "Brazos",
    "Hombros"
  ];

  return (
    <div className="filter-tabs">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-tabs__button ${
            selectedFilter === filter
              ? "filter-tabs__button--active"
              : ""
          }`}
          onClick={() => setSelectedFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}