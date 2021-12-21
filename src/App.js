import "./App.css";
import React, { useEffect, useContext } from "react";
import axios from "axios";
import dayjs from "dayjs";
import Month from "./components/Month";
import Header from "./components/Header";
import useDate from "./hooks/useDate";
import GlobalContext from "./context/GlobalContext";

const App = () => {
  const { loadData } = useDate();
  const { prevYear, nextYear, setPosts } = useContext(GlobalContext);

  useEffect(() => {
    loadData();
  }, [prevYear, nextYear]);

  useEffect(() => {
    axios
      .post("https://api.quinn.care/graph", {
        requestobjects: [
          {
            posts: {
              operationtype: "read",
              id: {
                return: true,
              },
              userid: {
                searchvalues: ["adbef521-7cf6-4344-af48-a9480df46549"],
                return: true,
              },
              iscalendarentry: {
                searchvalues: ["true"],
                return: true,
              },
              media: {
                return: true,
              },
              rating: {
                return: true,
              },
              text: {
                return: true,
              },
              privacy: {
                searchvalues: [18],
                return: true,
              },
              typeofday: {
                return: true,
              },
              calendardatetime: {
                return: true,
                sort: "descending",
              },
              maxitemcount: "20",
              continuationtoken: null,
            },
          },
        ],
      })
      .then((res) => res.data)
      .then((data) => {
        const newPosts = [];
        data.responseobjects[0].posts.map((post) => {
          const postData = {
            id: post.id,
            calendardatetime: dayjs(post.calendardatetime),
            media: post.media,
            rating: post.rating,
            text: post.text,
            typeofday: post.typeofday,
          };
          newPosts.push(postData);
        });
        setPosts(newPosts);
      });
  });

  return (
    <div className="App">
      <Header />
      <Month />
    </div>
  );
};

export default App;
