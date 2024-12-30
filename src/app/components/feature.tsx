import Link from "next/link";

const Categories = () =>{
    const categories = [
        'React', 'Next.js', 'TailwindCSS', 'TypeScript'
    ];
    return(
        <section className="bg-[#d8d8d8]">
       <aside className=" hidden lg:block w-1/4 p-4 ">
        <div className="mb-6 lg:ml-14">
            <h3 className="font-semibold text-[#301d57] text-3xl mb-5">
            Categories
            </h3>
            <div className="flex gap-7">
                {categories.map((categories:string, index:number) =>(
                    <span key={index} className="mt-5 transition ease-in-out delay-150 p-3 rounded-xl bg-slate-700 hover:-translate-y-1 hover:scale-110 hover:bg-[#f5efef] duration-300 ">
                        <Link href={"#"} className='hover:text-[#645757]  text-[#f5efef]   hover:underline'>
                        {categories}
                        </Link>
                    </span>
                ))}
            </div>
        </div>
       </aside>
       </section>
    );
}

export default Categories;