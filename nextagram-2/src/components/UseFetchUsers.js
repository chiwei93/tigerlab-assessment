import { useEffect, useState } from "react";
import axios from "axios";
import nextagram from "../api/nextagram";

const UseFetchUsers = (pageNumber) => {
  const [users, setUsers] = useState([]);
  const [usersPageLoading, setUsersPageLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUsersPageLoading(true);
        setError(false);

        //make api call to get users list
        const response = await nextagram.get("/users");

        //determine to start and end of slice method
        const start = (pageNumber - 1) * 10;
        const end = pageNumber * 10;

        //get sliced array
        const slicedResultsArr = response.data.slice(start, end);

        //fetch data for images
        const imagesResponseArr = await Promise.all(
          slicedResultsArr.map((result) => {
            return axios.get(
              `https://insta.nextacademy.com/api/v2/images?userId=${result.id}`
            );
          })
        );

        //get new array containing the user and its images
        const newUsersArr = imagesResponseArr.map((response, index) => {
          const { data: images } = response;

          const newUserObj = { ...slicedResultsArr[index], images };

          return newUserObj;
        });

        //set users to the old users plus the new users
        setUsers((prevUsers) => [...prevUsers, ...newUsersArr]);

        //determine whether there are more users on the list
        setHasMore(users.length < response.data.length);

        setUsersPageLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchUsers();
  }, [pageNumber]);

  return { users, usersPageLoading, error, hasMore };
};

export default UseFetchUsers;
