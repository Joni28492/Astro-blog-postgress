import prisma from '@db';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import {v4 as UUID} from 'uuid';

const clients = [
    { id: UUID(), name: 'John Doe', age: 29, isActive: true },
    { id: UUID(), name: 'Jane Smith', age: 34, isActive: false },
    { id: UUID(), name: 'Michael Johnson', age: 45, isActive: true },
    { id: UUID(), name: 'Emily Davis', age: 22, isActive: false },
    { id: UUID(), name: 'William Brown', age: 31, isActive: true },
    { id: UUID(), name: 'Sophia Wilson', age: 27, isActive: false },
    { id: UUID(), name: 'James Garcia', age: 38, isActive: true },
    { id: UUID(), name: 'Olivia Miller', age: 41, isActive: false },
    { id: UUID(), name: 'Daniel Martinez', age: 36, isActive: true },
    { id: UUID(), name: 'Ava Anderson', age: 25, isActive: false },
  ];


export const GET: APIRoute = async({params, request})=>{

    // borrar todos los usuarios
    await prisma.client.deleteMany()
    // Limpiar los posts
    await prisma.posts.deleteMany()
    // Insertar usuarios
    await prisma.client.createMany({ data: clients })
    //insertar posts
    // collection Blog
    const posts = await getCollection('blog')
    const postData = posts.map( post =>({
        id: post.id,
        title: post.data.title,
        likes: Math.round(Math.random() * 100)
    }) )

    await prisma.posts.createMany({
        data:  postData
    })
    


    return new Response('Ok!', {status: 200})
}