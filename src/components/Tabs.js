import React, { useState } from "react";
import '../assets/styles/tabs.css';
import '../assets/styles/universal.css';
import TabContent1 from './tab-content/TabContent1';
import TabContent2 from './tab-content/TabContent2';
import TabContent3 from './tab-content/TabContent3';
import TabContent4 from './tab-content/TabContent4';

const Tabs = () => {
    const tabs = [
        {
            label: 'Tab 1',
            content: <TabContent1 />
        },
        {
            label: 'Tab 2',
            content: <TabContent2 />
        },
        {
            label: 'Tab 3',
            content: <TabContent3 />
        },
        {
            label: 'Tab 4',
            content: <TabContent4 />
        }
    ]

    const [activeTab, setActiveTab] = useState(0);

    return(
        <div className="tabs">
            <div className="universal-card">
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