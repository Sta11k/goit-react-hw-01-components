import styles from './Profile.module.css';
import user from './user.json';

console.log(styles);
console.log(user);
function Profile() {
  return (
    <div className="Profile">
      <div className="profile">
        <div className="description">
          {/* <img
            src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
            alt="Аватар пользователя"
            className="avatar"
          /> */}
          <p className="name">Petra Marica</p>
          <p className="tag">@pmarica</p>
          <p className="location">Salvador, Brasil</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">1000</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">2000</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">3000</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>; */

export default Profile;
