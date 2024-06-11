import React from "react"
import { useEffect, useState } from "react"

function BlogComponent() {
    const [blogs, setBlogs] = useState([])
    const [isSuccessful, setIsSuccessful] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setIsSuccessful(true)
            setBlogs(data)
        })
        .catch(error => {
            setIsSuccessful(False)
            setBlogs(`Could not fetch blog posts, error: ${error}`)
        })
    }, [])

    if (isSuccessful) {
        return (
            <>
                <h1 className="header">Posts</h1>
                {blogs.map(blog => (
                    <div className="blog-post" key={blog.id}>
                        <h2>{blog.id}. {blog.title}</h2>
                        <p>{blog.body}</p>
                    </div>
                ))}
            </>
        )
    } else {
        return (
            <h1>{blogs}</h1>
        )
    }

        
}

export default BlogComponent
    