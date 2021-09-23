import Profile from './components/Profile/Profile';
import users from './components/Profile/user.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import transactions from './components/Transaction/transactions.json';
import TransactionHistory from './components/Transaction/TransactionHistory';

// import './App.css'

const App = () => (
  <>
    <Profile
      name={users.name}
      tag={users.tag}
      location={users.location}
      avatar={users.avatar}
      stats={users.stats}
    />
    <FriendList friends={friends} />;
    {/* <Statistics title="Upload stats" stats={statisticalData} />; */}
    <Statistics stats={statisticalData} />;
    <TransactionHistory items={transactions} />;
  </>
);

export default App;
