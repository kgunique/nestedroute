import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeUsers = searchParams.get("filter") === "active";
  const disableUsers = searchParams.get("filter") === "disable";

  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({ filter: "disable" })}>
          disable Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset User</button>
      </div>

      {activeUsers ? (
        <h1>Showing Active Users</h1>
      ) : disableUsers ? (
        <h1>Showing Disabled Users</h1>
      ) : (
        <h1>Showing all Users</h1>
      )}
    </div>
  );
};

export default Users;
