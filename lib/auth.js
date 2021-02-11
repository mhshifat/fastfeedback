import { createContext, useContext, useEffect, useState } from "react";
import firebase from "./firebase";

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
			if (user) setUser(user);
			else setUser(null);
		});

		return () => unsubscribe();
	}, []);

	const signinWithGithub = () => {
		const provider = new firebase.auth.GithubAuthProvider();

		return firebase
			.auth()
			.signInWithPopup(provider)
			.then((res) => {
				setUser(res.user);
				return res.user;
			});
	};

	const signout = () => {
		return firebase
			.auth()
			.signOut()
			.then(() => {
				setUser(null);
			});
	};

	return {
		user,
		signinWithGithub,
		signout,
	};
}
