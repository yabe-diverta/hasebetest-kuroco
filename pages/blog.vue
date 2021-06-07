import Link from "next/link";

 export async function getStaticProps() {
  const res = await fetch(`${f283061574fa6a086add6556a2cf3c06}/rcms-api/1/blog`);
  const data = await res.json();

  return {
   props: {
     data,
   },
   revalidate: 60, 
  };
 }

 export default function Blog(props) {
  const { data } = props;
  const lists = data.list;
  console.log(lists);

 return (
  <div>
   <ul className="p-4">
    {lists.map((list, index) => (
     <Link href={`/blog/${list.slug}`} key={index}>
      <a>
       <li className="m-2 text-blue-500">
        {list.subject}
       </li>
      </a>
     </Link>
    ))}
   </ul>
</div>
);
}