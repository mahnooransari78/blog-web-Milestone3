import Link from 'next/link';
import React from 'react'

export default function Blog () {
    const featuredPost = [
        {
            id:1,
            title: 'Understanding React State',
            description:'Learn the core concepts of React state.',
        },
       
        {
            id:2,
            title: 'Next.js Dynamic Routing Explained',
            description:'A guide to dynamic routing in Next.js.',
        },
    ];
    const latestpost = [
        {
            id:3,
            title:'Mastring tailwind Css',
            description:'Advanced techniques for Tailwind CSS.'
        },
        {
            id:4,
            title:'Building Accessible Websites',
            description:'Best practices for web accessibility.'
        },
        {
            id:5,
            title:'Optimizing React Performance',
            description:'Tips for faster React apps.'
        },
    ];
  return (
<div className='bg-[#d8d8d8]'>
    <div className='max-w-6xl mx-auto p-6 '>
        <header className='text-center text-[#301d57] border-t pt-4 mb-12'>
            <h1 className='text-4xl font-bold mb-4'>Blog Side</h1>
            <p className='text-lg '>
                {"Sharing insights, tutorials, and experiences on web development and design."}
            </p>
        </header>

        {/* featured post */}
        <section className='mb-12'>
            <h2 className='text-3xl text-[#301d57] font-semibold mb-6'>Featured Post</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {featuredPost.map((post)=>(
                    <div 
                    key={post.id}
                    className='border bg-[#edecee] rounded-lg p-4 shadow hover:shadow-white  hover:shadow-lg'>
                        <h3 className='text-xl font-bold mb-2'>
                            <Link href={`${post.id}`} className='text-[#56339b] hover:underline'>
                              {post.title}
                            </Link>
                        </h3>
                        <p className='text-gray-400'>{post.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* latest post */}

        <section>
        <h2 className='text-3xl font-semibold text-[#301d57] mb-6'>Latest Post</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {latestpost.map((post)=>(
                    <div 
                    key={post.id}
                    className='border bg-[#edecee]  hover:bg-[#edecee] rounded-lg p-4 shadow hover:shadow-white hover:shadow-lg'>
                        <h3 className='text-xl font-bold mb-2'>
                            <Link href={`${post.id}`} className='text-[#56339b]  hover:underline'>
                              {post.title}
                            </Link>
                        </h3>
                        <p className='text-gray-400'>{post.description}</p>
                    </div>
                ))}
            </div>
   
        </section>
      
    </div>
</div> 
  );
}
