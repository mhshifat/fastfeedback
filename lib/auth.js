import { createUser } from "@/lib/db";
import firebase from "@/lib/firebase";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const auth = useAuthProvider();

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

function useAuthProvider() {
	const [user, setUser] = useState(null);

	console.log(user);

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			user
				?.getIdTokenResult()
				.then((res) =>
					setUser((stateUser) => ({ ...stateUser, token: res.token }))
				);
			handleUser(user);
		});

		return () => unsubscribe();
	}, []);

	const signinWithGithub = () => {
		const provider = new firebase.auth.GithubAuthProvider();

		return firebase
			.auth()
			.signInWithPopup(provider)
			.then((res) => handleUser(res.user));
	};

	const signinWithGoogle = () => {
		return firebase
			.auth()
			.signInWithPopup(new firebase.auth.GoogleAuthProvider())
			.then((response) => handleUser(response.user));
	};

	const signout = () => {
		return firebase
			.auth()
			.signOut()
			.then(() => handleUser(null));
	};

	const handleUser = (rawUser) => {
		if (rawUser) {
			const user = formatUser(rawUser);
			createUser(user.uid, user);
			setUser(user);
			Cookies.set("fast-feedback-auth", true, { expires: 1 });
			return user;
		} else {
			setUser(null);
			Cookies.remove("fast-feedback-auth");
			return null;
		}
	};

	const formatUser = (user) => ({
		uid: user.uid,
		email: user.email,
		name: user.displayName,
		provider: user.providerData[0].providerId,
		photoUrl: user.photoURL,
	});

	return {
		user,
		signinWithGithub,
		signinWithGoogle,
		signout,
	};
}
