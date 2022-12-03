import '../App.css';
import Welcome from '../components/Welcome';
import Tabs from "../components/FormsAndTabs/Tabs";
import React from 'react';

const Home = () => {
  return (
    <>
      <Welcome />
      <Tabs />
    </>
  );
}

export default Home;