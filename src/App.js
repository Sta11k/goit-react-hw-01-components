import './App.css';
// import './components/profile/Profile.module.css';
// import './components/statistics/Statistics.module.css';

import Profile from './components/profile/Profile';
import user from '../src/components/profile/user.json';
import Statistics from './components/statistics/Statistics';
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
    </div>
  );
}

export default App;
