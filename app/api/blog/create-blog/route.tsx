import { db } from "@/firebase";
import { getDoc, doc, addDoc, collection } from "firebase/firestore";
export const POST = async (req: any, res: any) => {
  // console.log(await req.json());
  const { uid, text, image } = await req.json();
  console.log(uid, text, image);
  const docRef = collection(db, "blogs");
  await addDoc(docRef, {
    text: text,
    image: image,
    uid: uid,
  });
  return new Response("Blog Created Successfully", { status: 200 });
};
