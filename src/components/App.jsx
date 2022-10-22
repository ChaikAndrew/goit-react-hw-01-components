import user from './data/user.json';
import ProfileList from './profile/ProfileList';
export const App = () => {
  return (
    <div
      style={{
        padding: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ProfileList user={user} />
    </div>
  );
};
