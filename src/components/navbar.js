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

    // const Menu = styled.div`
    //   display: flex;
    // `;

    // const MenuItem = styled.div`
    //   text-align: center; /* Aligns <a> inside of NavIcon div */
    //   margin-bottom: 0; /* Puts space between NavItems */
    //   padding: 20px;
    //   margin-right: 20px;
    //   a,
    //   p {
    //     font-size: 1em;
    //     color: grey;
    //     text-decoration: none;
    //     :hover {
    //       opacity: 0.7;
    //     }
    //   }
    //   .dropdown-content {
    //     display: none;
    //     background-color: #f9f9f9;
    //     /* box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); */
    //     z-index: 1;
    //   }

    //   /* Show the dropdown menu on hover */
    //   &:hover .dropdown-content {
    //     display: block;
    //     line-break: wrap;
    //   }

    //   & > div {
    //     position: absolute;
    //   }

    //   /* Change the background color of the dropdown button when the dropdown content is shown */
    //   .dropdown:hover .dropbtn {
    //     background-color: #3e8e41;
    //   }
    // `;

    return (
      <div
        onClick={this.handleClick}
        selectedKeys={[current]}
        class="flex"
      >
        <div class="pr-8 py-8 hover:text-purple-500 " key="Home">
          <Link to={`/`}>首页</Link>
        </div>
        <div class="pr-8 py-8 hover:text-purple-500 " key="About">
          <Link to={`/about`}>关于我们</Link>
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
        <div  class="pr-8 py-8 hover:text-purple-500 " key="Join">
          <Link to={`/join`}>加入我们</Link>
        </div>
        <div  class="pr-8 py-8 hover:text-purple-500 " key="WeChat">
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
