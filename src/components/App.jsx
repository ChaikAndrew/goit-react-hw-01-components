import user from 'components/data/user.json';
import ProfileList from 'components/profile/ProfileList';

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
      {' '}
      <div className="header_task">goit-react-hw-01-components</div>
      <ProfileList user={user} />
    </div>
  );
};
