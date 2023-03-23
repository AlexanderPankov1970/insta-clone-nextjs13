import React from "react";
import Feed from "./components/Feed";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <h1 className="text-blue-500">Hello</h1>
      <h3 className="text-green-500">Welcome</h3> */}
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}
    </div>
  );
}
