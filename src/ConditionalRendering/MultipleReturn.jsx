import React, { useEffect,useState } from "react";


const MultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUsers] = useState("Default User");
  const url = "https://api.github.com/users/QuincyLarson";

  const fetchData =  () => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((item) => {
        setUsers(item.login);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <h2 className="text-center text-lg">Loading...</h2>;
  } else if (isError) {
    return <h2 className="text-center text-lg">Error...</h2>;
  }
  return (
    <React.Fragment>
      <h2 className="text-center text-xl">{`${user}...`}</h2>
    </React.Fragment>
  );
};

export default MultipleReturn;
