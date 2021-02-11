import { createUser } from "@/lib/db";
import firebase from "@/lib/firebase";
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
		const unsubscribe = firebase
			.auth()
			.onAuthStateChanged((user) => handleUser(user));

		return () => unsubscribe();
	}, []);

	const signinWithGithub = () => {
		const provider = new firebase.auth.GithubAuthProvider();

		return firebase
			.auth()
			.signInWithPopup(provider)
			.then((res) => handleUser(res.user));
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
			return user;
		} else {
			setUser(null);
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
		signout,
	};
}
