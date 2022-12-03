import React from 'react'

const API = "https://127.0.0.1:5000";

export default function Welcome() {
  return (
    <>
        <div>
            <h1>PollTogether</h1>
            <h3>Helping you plan for your group meetings</h3>
            <button><a href={API + "/login"}>Login</a></button>
        </div>
    </>
  );
}
