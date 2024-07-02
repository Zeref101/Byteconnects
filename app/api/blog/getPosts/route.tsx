import { db } from "@/firebase";
import { getDocs, collection, query, where, limit } from "firebase/firestore";

export const GET = async (req: any) => {
  const q = query(collection(db, "blogs"), limit(6));
  const docs: any = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    docs.push(doc.data());
  });
  return new Response(JSON.stringify(docs), { status: 200 });
};
