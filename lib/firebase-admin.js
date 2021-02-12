import admin from "firebase-admin";

const { privateKey } = JSON.parse(process.env.FIREBASE_PRIVATE_KEY);

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert({
			privateKey,
			clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
		}),
	});
}

export default admin.firestore();
