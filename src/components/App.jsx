import user from 'components/data/user.json';
import ProfileList from 'components/profile/ProfileList';
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
