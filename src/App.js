import './App.css';
import Profile from './components/profile/Profile';
import user from '../src/components/profile/user.json';
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
    </div>
  );
}

export default App;
