import React from "react";
import Layout from "../components/Layout";
import SignInForm from "../components/SignInForm";

export default function SignInPage({ buyer, user, getBuyer, setBuyer }) {
	return (
		<Layout>
			<SignInForm
				buyer={buyer}
				user={user}
				getBuyer={getBuyer}
				setBuyer={setBuyer}
			/>
		</Layout>
	);
}
