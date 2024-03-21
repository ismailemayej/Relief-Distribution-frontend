import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerOutlined, BarChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import DashboradNavbar from "../../component/DashboradNavbar";
import Footer from "../Footer/Footer";

const { Content, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("PieChart", "piechart", <BarChartOutlined />),
  getItem("Supply Posts", "", <ContainerOutlined />, [
    getItem("All Supply Post", "allsupplypost", <ContainerOutlined />),
    getItem("Create Supply Post", "create-supply", <ContainerOutlined />),
  ]),
];

const UserDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical text-white text-center lg:text-xl text-1 font-semibold">
          RD
        </div>

        <Menu
          onClick={(item) => navigate(item.key)}
          theme="dark"
          defaultSelectedKeys={["4"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: "#001529" }} />  */}{" "}
        <DashboradNavbar />
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default UserDashboard;
