import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import Container from "./Container";

const Protected = () => {
	const navigate = useNavigate();

	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then(() => {
				console.log("User was authenticated");
			})
			.catch(() => {
				navigate("/profile");
			});
	}, []);

	return (
		<Container>
			<h1>Protected route</h1>
		</Container>
	);
};
export default Protected;