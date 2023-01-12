import { Button, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { revokeAuth } from "../../store/actions/auth.action";

const { Header, Content, Footer } = Layout;

const menuItems = [
  {
    path: "/cart",
    displayName: "Cart",
    onClick: () => {},
  },
  {
    path: "/auth",
    displayName: "Auth",
    onClick: () => {},
  },
  {
    path: "/profile",
    displayName: "Profile",
    onClick: () => {},
  },
  {
    path: "/",
    displayName: "Home",
    onClick: () => {},
  },
];

const AppLayout = (props) => {
  const { authorization: token } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const generateDynamicMenuItems = () => {


    if (token) {
      const filteredItems = menuItems.filter(
        (item) => (item.displayName !== "Auth")
      );
      return [
        ...filteredItems,
        {
          path: "/",
          displayName: "Log out",
          onClick: () => dispatch(revokeAuth()),
        },
      ];
    }

    return menuItems.filter(item => item.displayName !== "Profile");
  };

  console.log(generateDynamicMenuItems());

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={generateDynamicMenuItems().map((item, key) => {
            return {
              key,
              label: (
                <Link to={item.path}>
                  <Button onClick={item.onClick}>{item.displayName}</Button>
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
