import styles from './Profile.module.css';
import user from './user.json';

console.log(styles);
console.log(user);
function Profile() {
  return (
    <div className="Profile">
      <div class="profile">
        <div class="description">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
            alt="Аватар пользователя"
            class="avatar"
          />
          <p class="name">Petra Marica</p>
          <p class="tag">@pmarica</p>
          <p class="location">Salvador, Brasil</p>
        </div>

        <ul class="stats">
          <li>
            <span class="label">Followers</span>
            <span class="quantity">1000</span>
          </li>
          <li>
            <span class="label">Views</span>
            <span class="quantity">2000</span>
          </li>
          <li>
            <span class="label">Likes</span>
            <span class="quantity">3000</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

{
  /* <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>; */
}

export default Profile;
