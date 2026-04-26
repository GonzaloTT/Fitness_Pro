import "./Profile.css";

import MainLayout from "../../components/layout/MainLayout/MainLayout";

import ProfileCard from "./components/ProfileCard/ProfileCard";
import AchievementsCard from "./components/AchievementsCard/AchievementsCard";
import SettingsPanel from "./components/SettingsPanel/SettingsPanel";
import LogoutSection from "./components/LogoutSection/LogoutSection";

export default function Profile() {
  return (
    <MainLayout>
      <section className="profile">
        <ProfileCard />
        <AchievementsCard />
        <SettingsPanel />
        <LogoutSection />
      </section>
    </MainLayout>
  );
}