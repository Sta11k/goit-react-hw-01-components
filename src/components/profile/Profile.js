import './Profile.module.css';
import user from './user.json';

export default function Profile(props) {
  // const followers = stats.followers;
  const {
    avatar,
    name,
    tag,
    location,
    followers = user.stats.followers,
    views = user.stats.views,
    likes = user.stats.likes,
  } = props;
  return (
    <div className="Profile">
      <div className="profile">
        <div className="description">
          <img src={avatar} alt="Аватар пользователя" className="avatar" />
          <p className="name">{name}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers </span>
            <span className="quantity">{followers}</span>
          </li>
          <li>
            <span className="label">Views </span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">Likes </span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
