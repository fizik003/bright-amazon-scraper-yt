import * as admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

const credentialBase64 = process.env.GOOGLE_CREDENTIAL;

const credential = JSON.parse(
  Buffer.from(credentialBase64!, "base64").toString()
);

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(credential),
  });
}

export const adminDb = admin.firestore();
