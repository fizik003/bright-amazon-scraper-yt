import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import admin from "firebase-admin";

import { adminDb } from "./../../firebaseAdmin";

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const { search } = await req.json();
    console.log(`SEARCH IS >> ${search}`);

    const response = await fetch(
      `https://api.brightdata.com/dca/trigger?collector=c_lf1ka1611n72gldabo&queue_next=1`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search: search }),
      }
    );

    const data = await response.json();

    console.log("DATA IS >>>", data);

    const { collection_id, start_eta } = data;

    await adminDb.collection("searches").doc(collection_id).set({
      search,
      start_eta,
      status: "pending",
      updateAt: admin.firestore.Timestamp.now(),
    });

    return NextResponse.json({ collection_id, start_eta });
  } catch (error: any) {
    console.log(`ERROR IS >>> ${error}`);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
