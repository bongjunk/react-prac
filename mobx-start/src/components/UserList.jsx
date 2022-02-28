import { useEffect } from "react";

export default function UserList({ getUsers, users }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <>
      <ul>
        {users.map((user) => (
          <li>{user.login}</li>
        ))}
      </ul>
    </>
  );
}
