import "./Routines.css";
import MainLayout from "../../components/layout/MainLayout/MainLayout";

import RoutineHeader from "./components/RoutineHeader/RoutineHeader";
import WorkoutProgress from "./components/WorkoutProgress/WorkoutProgress";
import RestTimer from "./components/RestTimer/RestTimer";
import ExerciseList from "./components/ExerciseList/ExerciseList";
import ExerciseTable from "./components/ExerciseTable/ExerciseTable";

export default function Routines() {
  return (
    <MainLayout>
      <section className="routines">

        <RoutineHeader />

        <WorkoutProgress />

        <div className="routines__middle-grid">
          <RestTimer />
          <ExerciseList />
        </div>

        <ExerciseTable />

      </section>
    </MainLayout>
  );
}