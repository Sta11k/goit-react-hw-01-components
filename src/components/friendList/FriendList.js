import friends from './friends.json';
import './FriendList.css';

export default function FriendList(props) {
  //  const { id, label, percentage } = props;
  return (
    <div className="FriendList">
      <ul className="friend-list">
        {friends.map(el => (
          <li className="item" key={el.id}>
            <span className="status">{el.isOnline}</span>
            <img className="avatar" src={el.avatar} alt="avatar" width="48" />
            <p className="name">{el.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* {FriendList.title === true ? (
        <h2 className="title">{FriendList.title}</h2>
      ) : (
        ' '
      )} */
