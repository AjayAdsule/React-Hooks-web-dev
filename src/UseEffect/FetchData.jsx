import React from "react";
import { useState, useEffect } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const url = "https://api.github.com/users";
  const getUsers = async () => {
    const res = await fetch(url);
    const result = await res.json();
    console.log(result);
    setUsers(result);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <React.Fragment>
      {users.map((user) => {
        return (
          <div className="container flex" key={user.id}>
            <img src={user.avatar_url} className="w[100px]" alt="" />
            <h1>{user.login}</h1>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default FetchData;
