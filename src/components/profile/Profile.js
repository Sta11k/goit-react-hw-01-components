import styles from './Profile.module.css';
import user from './user.json';

console.log(styles);
console.log(user);

//  <Profile
//   name={user.name}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />;

function Profile(props) {
  return (
    <div className="Profile">
      <div className="profile">
        <div className="description">
          <img
            src={props.avatar}
            alt="Аватар пользователя"
            className="avatar"
          />
          <p className="name">{props.name}</p>
          <p className="tag">@{props.tag}</p>
          <p className="location">{props.location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers </span>
            <span className="quantity">{props.stats.followers}</span>
          </li>
          <li>
            <span className="label">Views </span>
            <span className="quantity">{props.stats.views}</span>
          </li>
          <li>
            <span className="label">Likes </span>
            <span className="quantity">{props.stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
