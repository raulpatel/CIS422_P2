import React, { useState } from 'react'
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import TabCreate from "./TabCreate";
import TabView from "./TabView";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1")

  return (
    
    <div className="Tabs">
      
      {/* Tab nav */}
      <ul className="nav">
        <TabNavItem title="Create" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="View" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
        {activeTab === "tab1" ? <TabCreate /> : <TabView />}
        <TabContent id="tab1" activeTab={activeTab}></TabContent>
        <TabContent id="tab2" activeTab={activeTab}></TabContent>
      </div>
    </div>
  );
};

export default Tabs;
