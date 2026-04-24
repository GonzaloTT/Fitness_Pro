import "./Header.css";
import moneyIcon from "../../../assets/icons/money.png";
import notificationIcon from "../../../assets/icons/notification.png";

export default function Header() {
  return (
    <header className="header">
      
      {/* LEFT */}
      <div className="header__left">
        <h1 className="header__logo">FITNESS PRO</h1>
      </div>

      {/* RIGHT */}
      <div className="header__right">
        <button className="header__icon">
          <img src={moneyIcon} alt="Monedas" />
        </button>

        <button className="header__icon">
          <img src={notificationIcon} alt="Monedas" />
        </button>
      </div>

    </header>
  );
}