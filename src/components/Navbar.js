import React from 'react';
import { Menu } from 'antd';
import {Link} from "gatsby"

import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="Home">
          <Link to={`/`}>首页</Link>
        </Menu.Item>
        <Menu.Item key="About">
          <Link to={`/about`}>关于我们</Link>
        </Menu.Item>
        <Menu.Item key="Blog">
          <Link to={`/blog`}>博客</Link>
        </Menu.Item>
        {/* <SubMenu title="Initiatives">
          <Menu.ItemGroup title="Events">
            <Menu.Item key="1">Coming Soon</Menu.Item>
            <Menu.Item key="2">Coming Soon</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Programs">
            <Menu.Item key="3">Coming Soon</Menu.Item>
            <Menu.Item key="4">Coming Soon</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
        <Menu.Item key="Join">
        <Link to={`/join`}>加入我们</Link>
        </Menu.Item>
        <Menu.Item key="WeChat">
          <a href="#" target="_blank" rel="noopener noreferrer">
            微信公众号
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;