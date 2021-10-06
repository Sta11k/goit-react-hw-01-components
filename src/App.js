import './App.css';
import Profile from './components/profile/Profile';
import user from '../src/components/profile/user.json';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/friendList/FriendList';
import friends from './components/friendList/friends.json';

//  import StatisticalData from './components/statistics/Statistics';
function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics />
      <FriendList friends={friends} />,
    </div>
  );
}

export default App;
