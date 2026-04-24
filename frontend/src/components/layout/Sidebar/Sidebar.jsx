import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "./sidebarData";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      {/* USER */}
      <div className="sidebar__user">
        <div className="sidebar__avatar">👤</div>
        <div>
          <p className="sidebar__name">User</p>
          <span className="sidebar__status">Stay disciplined.</span>
        </div>
      </div>

      {/* NAV */}
      <nav className="sidebar__nav">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar__link sidebar__link--active"
                : "sidebar__link"
            }
          >
            <img src={link.icon} alt={link.name} />
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>

    </aside>
  );
}