import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("taste_house"); 
  const foods = await db.collection("foods").find({}).toArray();
  return new Response(JSON.stringify(foods), { status: 200 });
}

export async function POST(request) {
  const data = await request.json();
  const client = await clientPromise;
  const db = client.db("taste_house");
  await db.collection("foods").insertOne(data);
  return new Response(JSON.stringify({ message: "Food added" }), { status: 201 });
}