import user from 'components/data/user.json';
import friends from 'components/data/friends.json';
import statistic from './data/statistic.json';
import transactions from './data/transactions.json';

import ProfileList from 'components/profile/ProfileList';
import { FriendList } from './friendList/FriendList';
import { Statistic } from './statistic/Statistic';
import { Transaction } from './Transaction/Transaction';
export const App = () => {
  return (
    <div
      style={{
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="header_task">goit-react-hw-01-components</div>
      <ProfileList user={user} />
      <Statistic title="Upload stats" stats={statistic} />
      {/* <Statistic stats={statistic} /> */}
      <FriendList friends={friends} />
      <Transaction transactions={transactions} />
    </div>
  );
};
