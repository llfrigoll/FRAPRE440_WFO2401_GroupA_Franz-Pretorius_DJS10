import React from "react"
import { useEffect, useState } from "react"

function BlogComponent() {
    const [blogs, setBlogs] = useState([])
    let isSuccessful = false
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            isSuccessful = true
            setBlogs(data)
        })
        .catch(error => {
            setBlogs(`Could not fetch blog posts, error: ${error}`)
        })
    }, [])

    if(isSuccessful) {
        let blogsHTML = []
        blogs.forEach((blog) => {
            console.log(blog)
            blogsHTML.push(
                <div className="blog-post">
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            )
        })
        return (
            <>
                <h1 className="header">Posts</h1>
                {blogsHTML}
            </>
        )
    }else {
        return (
            <h1>{blogs}</h1>
        )
    }

        
}

export default BlogComponent
    