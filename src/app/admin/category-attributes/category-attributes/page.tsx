"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";


export default function Home() {
  const searchParams = useSearchParams();

  const {name,id}: { name: string; id: string } = JSON.parse(
    searchParams.get("category") as string
  );
  return (
    <main className="">
      <h3>hello admin!</h3>
      <p>category-attributes page</p>
      <p>catName:{name} id: {id}</p>
    </main>
  );
}

// curd attributes to category
function CategoryAttributes(){
  // for this category render all associated attributes , functionallity to RUD
}

function AddAttributeToCategory(){
  // attribute already exists , map it to this category
  // create new and map attribute
}
