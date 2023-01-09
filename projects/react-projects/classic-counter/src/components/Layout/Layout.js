import { Button, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

const { Header, Content, Footer } = Layout;

const menuItems = [
  {
    path: "/cart",
    displayName: "Cart",
  },
  {
    path: "/auth",
    displayName: "Auth",
  },
  {
    path: "/profile",
    displayName: "Profile",
  },
  {
    path: "/",
    displayName: "Home",
  },
];

const AppLayout = (props) => {

  const { name } = useSelector(store => store.user)

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={menuItems.map((item, key) => {
            return {
              key,
              label: (
                <Link to={item.path}>
                  <Button>{item.displayName}</Button>
                </Link>
              ),
            };
          })}


        />

        {/* <Button type="primary">{name}</Button> */}
      </Header>
      <Content style={{ padding: "0 50px" }}>{props.children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Geekster ecommerce store ©2023 Created by Geekster
      </Footer>
    </Layout>
  );
};

export default AppLayout;
