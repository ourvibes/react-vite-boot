import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import styles from './style.module.less';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = () => {
    navigate('/home')
  }

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            label="用户名"
            name="username"
            required
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            required
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
