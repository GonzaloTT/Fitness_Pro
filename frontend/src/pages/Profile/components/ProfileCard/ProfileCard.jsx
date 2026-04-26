import "./ProfileCard.css";

import editIcon from "../../../../assets/icons/edit.png";
import zapIcon from "../../../../assets/icons/zap.png";
import moneyIcon from "../../../../assets/icons/money.png";

export default function ProfileCard() {
  const user = {
    name: "Gonzalo Martínez",
    nickname: "@gonzfit",
    level: 12,
    coins: 1540
  };

  return (
    <section className="profile-card">
      <div className="profile-card__avatar-wrapper">
        <div className="profile-card__avatar">
          GM
        </div>

        <button className="profile-card__edit-avatar">
          <img src={editIcon} alt="Edit Profile" />
        </button>
      </div>

      <div className="profile-card__info">
        <h1>{user.name}</h1>
        <p>{user.nickname}</p>
      </div>

      <div className="profile-card__stats">
        <div className="profile-card__stat">
          <div className="profile-card__stat-label">
            <img src={zapIcon} alt="Level" />
            <span>Nivel</span>
          </div>

          <strong>{user.level}</strong>
        </div>

        <div className="profile-card__stat">
          <div className="profile-card__stat-label">
            <img src={moneyIcon} alt="Coins" />
            <span>Monedas</span>
          </div>

          <strong>{user.coins}</strong>
        </div>
      </div>
    </section>
  );
}