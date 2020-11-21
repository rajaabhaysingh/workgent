import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const jobList = [{ A: ["", ""] }, { B: ["", ""] }];

const HomeTabs = () => {
  return (
    <div className="fcol mar_t-32">
      <div className="fc_bw pad_0-8">
        <div className="fwb fc-5c fsn">Browse through all categories</div>
        <Link className="link fwb fsm" to="/categories">
          Show all
        </Link>
      </div>
      <Tabs
        className="w-100 mar_t-32"
        selectedTabClassName="bg_pri fc_white fwb round_lrt-8"
      >
        <TabList className="fc no_list fsm fc-5c bor_b_pri-1">
          <Tab className="pad_8-16 cur">A</Tab>
          <Tab className="pad_8-16 cur">B</Tab>
          <Tab className="pad_8-16 cur">C</Tab>
        </TabList>

        <TabPanel className="bg_white w-100 round_lrb-8 pad-16 bb">
          <div style={{ display: "flex", flexWrap: "wrap" }}>Some content</div>
        </TabPanel>
        <TabPanel className="bg_white w-100 round_lrb-8 pad-16 bb">
          <div style={{ display: "flex", flexWrap: "wrap" }}>Some content</div>
        </TabPanel>
        <TabPanel className="bg_white w-100 round_lrb-8 pad-16 bb">
          <div style={{ display: "flex", flexWrap: "wrap" }}>Some content</div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HomeTabs;
