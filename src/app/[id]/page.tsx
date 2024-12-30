'use client';
import DOMPurify from "dompurify";
import dynamicR from "@/app/Image/dynamicR.png";
import Image from "next/image";
import optimize from '@/app/Image/optimize.jpg';
import web from '@/app/Image/web.jpg';
import taiwind from "@/app/Image/tailwind.jpg"
import react from '@/app/Image/react.jst.jpg';

import React, { useState } from 'react'

function Page({ params } : {params: { id: string }}) {
  
  const [comments , setComments] = useState<string[]>([]);
  const [newComment, setNewComments] = useState('');
    const posts = [
        {
           id: '1',
           title: 'Next.js Dynamic Routing Explained',
           description:'A guide to dynamic routing in Next.js.',
         image: dynamicR,
         content: 'As part of this tutorial, you will learn how to set up dynamic routing in Next.js, including pre-rendering, server-side rendering, and static generation.Next.js is a hybrid framework on top of React, which enables static and server-side rendering. It is packed with awesome features like file system routing, dynamic routing, image optimization, typescript support, code-splitting & bundling, etc., which are useful for any project. All in all, it is an impressive production framework for React.'
        },
        { 
          id: '2',
          title: 'Understanding React State', 
          description:'Learn the core concepts of React state.',
         image: react,
         content:'In React, state is a JavaScript object that holds data that can be used to influence the rendering of a component. In simple terms, think of it as any piece of information that can change over time and impact how your component appears or behaves. The state allows developers to create dynamic and interactive UIs by enabling components to respond to user input, API responses, or other events.'
        },
        { id: '3',     
          image: taiwind,
          title: 'Mastering Tailwind CSS',
        description:'Advanced techniques for Tailwind CSS.',
        content:'As technology advances, the demand for concise, reliable, and efficient code continues to surge. One solution that tech enthusiasts have widely adopted is Tailwind CSS. Beyond its utility-first approach, responsive design, ability to give direct control to the developer, robust plugin systems, custom state variants, user personalizations, and output optimizations, it also boasts a myriad of classes set to streamline your workflow. Understanding how to effectively use these classes can significantly enhance your productivity and precision as a developer.'
        
        },
        {
           id:'4',
         image: web,
         title:'Building Accessible Websites',
           description:'Best practices for web accessibility.',
           content:'Website accessibility refers to the extent to which a site can be used by individuals with disabilities. This can include people who are blind or have low vision, those who are deaf or hard of hearing, people with mobility impairments, cognitive disabilities, and other disabilities. It involves designing your website so that its content is available to and functional for everyone, including those who might use assistive technologies like screen readers, voice recognition software, or specialized input devices.'
          },
         {
            id:'5',
         image: optimize,
         title:'Optimizing React Performance',
            description:'Tips for faster React apps.',
            content:'Performance optimization is a critical aspect of developing web applications. Users expect applications to load quickly and respond to their interactions smoothly.In the React ecosystem, performance optimization techniques can significantly enhance the user experience by reducing load times and improving responsiveness.'
         }
      ];
            // for dynamic rout posts
            const post = posts.find((p) => p.id === params.id);
            
            if (!post) {
              return <div className='text-center justify-center text-3xl mt-20'>
               <h2 className='font-bold text-4xl mb-3'> {"Post not found! :("}</h2>
                <p className='text-lg text-gray-400'>{"We couldn't find the page you were looking for. Perhaps it doesn't exist?"}</p>
                </div>
            }

          // for comments
          
          

          const AddComment = () => {
            if (newComment.trim().length > 0 && newComment.trim().length <= 500) {
              const saintizedComment = DOMPurify.sanitize(newComment)
              setComments([...comments, saintizedComment]);
              setNewComments('');
            }else{
            alert("Comment must be between 1 and 500 charaters!")
            }
          };
          
  return (
    // blog
    <div className='max-w-4xl mx-auto p-4'>
      <h1 className='text-3xl text-[#4f3486] font-bold mb-4'>{post.title}</h1>
      <h5 className='text-lg text-[#56339b] mb-6'>{post.description}</h5>
      <div className="w-1/2 items-center justify-center">
        <Image
        src={post.image}
        alt={post.title}
        width={300}
        height={200}
        className="object-cover rounded-md w-full"
         /></div>
      <p className='leading-10 text-[#615477]'>{post.content}</p>

      {/* comment section */}

      <div className='border-t pt-4'>
        <h2 className='text-2xl font-semibold text-[#4f3486] mb-4'>Comments</h2>
        <ul className='space-y-2 mb-4'>
          {comments.map((comments,index) => (
            <li
            key={index}
            className='border-b py-2'>
              {comments}
            </li>
          ))}
        </ul>
        {/* for add comment */}

        <textarea 
          value={newComment}
          onChange={(e) => setNewComments(e.target.value)}
          className='w-full border rounded-lg p-2 mb-3'
          placeholder='Write a comment...'/>
          <button 
          onClick={AddComment}
          className='bg-slate-700 text-white px-4 py-2 rounded-lg'>
            Submit Comment
          </button> 
      </div>
    </div>
  )
}

export default Page
