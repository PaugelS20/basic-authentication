import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
	HomeOutlined,
	ProfileOutlined,
	FileProtectOutlined,
} from "@ant-design/icons";

const Nav = () => {
	const items = [
		{
			label: <Link to={`/`}>Home</Link>,
			key: "home",
			icon: <HomeOutlined />,
		},
		{
			label: <Link to={`/profile`}>Profile</Link>,
			key: "profile",
			icon: <ProfileOutlined />,
		},
		{
			label: <Link to={`/protected`}>Protected</Link>,
			key: "protected",
			icon: <FileProtectOutlined />,
		},
	];

	const [current] = useState();

	return <Menu selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Nav;

// <div>
// 	<Menu selectedKeys={[current]} mode="horizontal">
// 		<Menu.Item key="home">
// 			<Link to={`/`}>
// 				<HomeOutlined />
// 				Home
// 			</Link>
// 		</Menu.Item>

// 		<Menu.Item key="profile">
// 			<Link to="/profile">
// 				<ProfileOutlined />
// 				Profile
// 			</Link>
// 		</Menu.Item>

// 		<Menu.Item key="protected">
// 			<Link to="/protected">
// 				<FileProtectOutlined />
// 				Protected
// 			</Link>
// 		</Menu.Item>
// 	</Menu>
// </div>
// return (
// 	<div>
// 		<Menu selectedKeys={[current]} mode="horizontal"></Menu>
// 	</div>
// );