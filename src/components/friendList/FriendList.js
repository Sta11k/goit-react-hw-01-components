import friends from './friends.json';
import './FriendList.css';

export default function FriendList(props) {
  //  const { id, label, percentage } = props;

  return (
    <div className="FriendList">
      <ul className="friend-list">
        {friends.map(el => (
          <li className="friend-item" key={el.id}>
            {el.isOnline === true ? (
              <span className="statusOn">&#x263A;</span>
            ) : (
              <span className="statusOf">&#x263A;</span>
            )}

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
