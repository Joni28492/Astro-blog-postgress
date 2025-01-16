

import type { APIRoute } from 'astro';

export const GET: APIRoute = async({params, request})=>{
    // request.method nos da el GET
    const responseObject = JSON.stringify({method: request.method})
    return new Response( responseObject, 
    {
        status: 200, 
        headers: {'Content-Type': 'application/json'}
    })
}


export const POST: APIRoute = async({params, request})=>{
    
    
    const responseObject = JSON.stringify({method: request.method})
    return new Response( responseObject, 
    {
        status: 201, 
        headers: {'Content-Type': 'application/json'}
    })
}

