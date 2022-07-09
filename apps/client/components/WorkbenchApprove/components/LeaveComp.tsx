import { Button, Form } from "@douyinfe/semi-ui";
import React from "react";

const typeArr = [
  {
    type: 1,
    label: "年假",
  },
  {
    type: 2,
    label: "事假",
  },
  {
    type: 3,
    label: "病假",
  },
  {
    type: 4,
    label: "调休假",
  },
  {
    type: 5,
    label: "婚假",
  },
  {
    type: 6,
    label: "产假",
  },
  {
    type: 7,
    label: "陪产假",
  },
  {
    type: 8,
    label: "丧假",
  },
  {
    type: 9,
    label: "哺乳假",
  },
];

/**
 * Modal 中的 请假 组件
 */
const LeaveComp = () => {
  const handleSubmit = () => {
    // TODO:“请假”组件的 submit
  };

  return (
    <Form style={{ width: "40%" }} onSubmit={handleSubmit}>
      <Form.Select
        field="type"
        label="请假类型"
        style={{ width: "100%" }}
        initValue={1}
      >
        {typeArr.map((item) => (
          <Form.Select.Option key={item.type} value={item.type}>
            {item.label}
          </Form.Select.Option>
        ))}
      </Form.Select>
      <Form.DatePicker
        type="dateTime"
        field="startTime"
        label="开始时间"
      ></Form.DatePicker>
      <Form.DatePicker
        type="dateTime"
        field="endTime"
        label="结束时间"
      ></Form.DatePicker>
      <Form.TextArea
        field="reason"
        label="请假事由"
        trigger="blur"
        placeholder="请输入"
      />

      <Button type="primary" htmlType="submit" block>
        提交
      </Button>
    </Form>
  );
};

export default LeaveComp;