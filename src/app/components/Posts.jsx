import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "alex_pankov",
      userImg: "/pankov3.jpg",
      caption: "Amazing picture",
      img: "/bridge.jpg",
      //img: "https://images.pexels.com/photos/7387470/pexels-ph…jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "2",
      username: "alex_pankov",
      userImg: "/pankov3.jpg",
      caption: "Cool car",
      img: "/BMW.jpg",
      //   img: "https://unsplash.com/photos/2AovfzYV3rc",
    },
    {
      id: "3",
      username: "alex_pankov",
      userImg: "/pankov3.jpg",
      caption: "New photo",
      img: "/Chevrolet.jpg",
      //img: "https://unsplash.com/photos/2AovfzYV3rc",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
