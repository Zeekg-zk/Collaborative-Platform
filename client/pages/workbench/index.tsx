import React from "react";
import { TabPane, Tabs, Card } from "@douyinfe/semi-ui";
import { IconInherit, IconKanban } from "@douyinfe/semi-icons";
import WorkbenchApprove from "../../components/WorkbenchApprove";
import WorkbenchReport from "../../components/WorkbenchReport";

const Workbench = () => {
  return (
    <Card
      title="工作台"
      style={{ height: "100%", backgroundColor: "white" }}
      bodyStyle={{ height: "calc(100% - 64px - 40px)" }}
    >
      <Tabs
        tabPosition="left"
        type="card"
        keepDOM={false}
        style={{ height: "100%" }}
        defaultActiveKey="1"
        contentStyle={{ padding: "0 20px", height: "100%" }}
      >
        <TabPane
          tab="审批"
          icon={<IconInherit />}
          itemKey="1"
        >
          <WorkbenchApprove />
        </TabPane>
        <TabPane
          tab="汇报"
          icon={<IconKanban />}
          itemKey="2"
        >
          <WorkbenchReport />
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default Workbench;
