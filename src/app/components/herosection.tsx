import Image from "next/image";
import blog from '@/app/Image/blog book.png';
import dynamicR from "@/app/Image/dynamicR.png";
import react from '@/app/Image/react.jst.jpg';
import tailwind from "@/app/Image/tailwind.jpg";
import Link from "next/link";

const Herosection = () => {
    const posts = [
        { id: 1,
         title: 'Next.js Dynamic Routing Explained', 
         image: dynamicR,
        },

        { id: 2,
         title: 'Understanding React State',
         image: react,
        },
        { id: 3,     
        title: 'Mastering Tailwind CSS',
        image: tailwind,
        },
        
      ];
    return (
        <section>
            <div className="bg-[#f5f2f2] items-center justify-center">
                <Image 
                src={blog}
                alt="bolg image"
                width={700}
                height={700}
                className="object-fill items-center justify-center lg:ml-32"
                />
            </div>
         
            <div className="max-w-4xl mx-auto p-4">
  <h1 className="text-3xl text-[#301d57] font-bold mb-6 text-center">Blog Posts</h1>
  
  {/* Grid container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {posts.map((post) => (
      <div
        key={post.id}
        className="bg-[#edecee] shadow hover:shadow-white hover:shadow-lg border rounded-md overflow-hidden flex flex-col items-center"
      >
        {/* Image */}
        <div className="w-full">
          <Image
            src={post.image}
            alt={post.title}
            width={300}
            height={200}
            className="object-fill  w-full h-[200px]"
          />
        </div>

        {/* Title */}
        <Link
          href={`${post.id}`}
          className="text-xl text-[#684ca1] hover:underline mt-4 text-center"
        >
          <h4>{post.title}</h4>
        </Link>
      </div>
    ))}
  </div>
</div>

        </section>
    );
}

export default Herosection;