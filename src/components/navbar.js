import React from "react";
import { Link } from "gatsby";

class Navbar extends React.Component {
  state = {
    current: "Home",
  };

  // handleClick = e => {
  //   console.log('click ', e);
  //   this.setState({ current: e.key });
  // };

  render() {
    const { current } = this.state;

    return (
      <div
        onClick={this.handleClick}
        selectedKeys={[current]}
        className="flex px-16 py-4 bg-purple-100 2xl:px-32"
      >
        <div className="pr-8 py-4 hover:text-purple-500 " key="Home">
          <Link to={`/`}>首页</Link>
        </div>
        <div className="pr-8 py-4 hover:text-purple-500 " key="About">
          <Link to={`/about`}>关于我们</Link>
        </div>
        <div className="pr-8 py-4 hover:text-purple-500 " key="Blog">
          <Link to={`/blog`}>博客</Link>
        </div>
        <div className="pr-8 py-4 hover:text-purple-500 " key="Events">
          <Link to={`/events`}>活动</Link>
        </div>
        <div className="pr-8 py-4 hover:text-purple-500 " key="Resources">
          <Link to={`/resources`}>资源</Link>
        </div>
        {/* <MenuItem key="Blog">
          <Link to={`/blog`}>博客</Link>
        </MenuItem> */}
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
        <div  className="pr-8 py-4 hover:text-purple-500 " key="Join">
          <Link to={`/join`}>加入我们</Link>
        </div>
        <div  className="pr-8 py-4 hover:text-purple-500 " key="WeChat">
          <a
            href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI5MjIwNDUwNg==&scene=124#wechat_redirect"
            target="_blank"
            rel="noopener noreferrer"
          >
            微信公众号
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
