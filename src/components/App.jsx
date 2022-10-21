import user from './data/user.json';
import ProfileList from './profile/ProfileList';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ProfileList user={user} />
    </div>
  );
};
