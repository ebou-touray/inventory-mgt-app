import React, { useContext } from 'react';
import styles from './Footer.module.css';
import { Typography, Row, Col, BackTop } from 'antd';
import {
  LoginOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { AuthContext } from '../../App';

// antd
const { Title, Text, Link } = Typography;

const Footer = () => {
  const { state } = useContext(AuthContext);
  return (
    <footer className={styles.Footer}>
      <Row>
        <Col span={12}>
          <Title level={2}>Inventory Management App</Title>
          <Text>Description here</Text>
          <br />
          <br />
        </Col>
        <Col offset={4} span={8}>
          <Row>
            <Col span={12}>
              <Title level={4}>Useful links</Title>
              {state.isAuthenticated ? (
                <>
                  <Link href="/login">
                    <LoginOutlined /> Login
                  </Link>
                  <br />
                  <Link href="/register">
                    <UserAddOutlined /> Register
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <LoginOutlined /> Login
                  </Link>
                  <br />
                  <Link href="/register">
                    <UserAddOutlined /> Register
                  </Link>
                  <br />
                </>
              )}
            </Col>
            <Col span={12}>
              <Title level={4}>About the App</Title>

              <br />
            </Col>
          </Row>
        </Col>
      </Row>
      <>
        <BackTop />

      
      </>
    </footer>
  );
};

export default Footer;
