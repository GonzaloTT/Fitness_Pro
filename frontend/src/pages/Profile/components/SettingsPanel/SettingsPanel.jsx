import "./SettingsPanel.css";
import userIcon from "../../../../assets/icons/user.png";
import securityIcon from "../../../../assets/icons/security.png";
import notificationIcon from "../../../../assets/icons/notification.png";

export default function SettingsPanel() {
  const options = [
    {
      label: "Editar Perfil",
      icon: userIcon
    },
    {
      label: "Privacidad y Seguridad",
      icon: securityIcon
    },
    {
      label: "Preferencias de Notificación",
      icon: notificationIcon
    }
  ];

  return (
    <section className="settings-panel">
      <h2>Configuración</h2>

       <div className="settings-panel__list">
        {options.map((option) => (
          <button
            key={option.label}
            className="settings-option"
          >
            <img
              src={option.icon}
              alt={option.label}
              className="settings-option__icon"
            />

            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}