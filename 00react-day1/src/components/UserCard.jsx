import Counter from './Counter';

function UserCard({ name, role }) {
  return (
    <div style={{ padding: '20px' }}>
      <h3>{name}</h3>
      <p>{role}</p>
      <Counter buttonName="Increment" />
    </div>
  );
}
export default UserCard;
