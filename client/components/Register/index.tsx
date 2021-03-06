import { Toast, Modal, Form, Space, Button } from "@douyinfe/semi-ui";
import React from "react";
import { register, useUser } from "../../data/user";

interface IProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * 注册 组件
 */
const Register = (props: IProps) => {
  const { register } = useUser();
  const { visible, setVisible } = props;
  const handleSubmit = async (values: any) => {
    await register(values);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Modal
      title="注册"
      visible={visible}
      onCancel={handleCancel}
      maskClosable={false}
      footer={null}
    >
      <Form labelPosition="inset" onSubmit={handleSubmit}>
        <Form.Input
          field="name"
          label="姓名"
          trigger="blur"
          rules={[
            { required: true, message: "必填项" },
            { type: "string", message: "type error" },
          ]}
        />
        <Form.Input
          field="email"
          label="邮箱"
          trigger="blur"
          rules={[
            { required: true, message: "必填项" },
            { type: "string", message: "type error" },
          ]}
        />
        <Form.Input
          field="password"
          label="密码"
          mode="password"
          trigger="blur"
          rules={[
            { required: true, message: "必填项" },
            { type: "string", message: "type error" },
          ]}
        />

        <Space
          align="center"
          spacing="medium"
          style={{ margin: "10px 0", marginBottom: "20px" }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="reset">reset</Button>
        </Space>
      </Form>
    </Modal>
  );
};

export default Register;
