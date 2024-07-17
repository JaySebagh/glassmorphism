import React, { useState } from "react";
import '../assets/styles/tabs.css';
import Landing from './tab-content/Landing';
import Skills from './tab-content/Skills';
import TabContent3 from './tab-content/TabContent3';
import TabContent4 from './tab-content/TabContent4';

const Tabs = () => {
    const tabs = [
        {
            label: 'Home',
            content: <Landing />
        },
        {
            label: 'Skills',
            content: <Skills />
        },
        {
            label: 'Projects',
            content: <TabContent3 />
        },
        {
            label: 'Contact',
            content: <TabContent4 />
        }
    ]

    const [activeTab, setActiveTab] = useState(0);

    return(
        <div className="tabs">
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
            <div className="tabs-buttons">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={index === activeTab ? 'tab active' : 'tab inactive'}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tabs;