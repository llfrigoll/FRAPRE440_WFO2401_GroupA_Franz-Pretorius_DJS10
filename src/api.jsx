import React from "react"
import { useEffect, useState } from "react"

function BlogComponent() {
    //All states used during the project
    const [blogs, setBlogs] = useState([])
    const [isSuccessful, setIsSuccessful] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    //Using useEffect to fetch data
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                if (!response.ok) {
                    throw new Error('Could not fetch blogs')
                }
                const data = await response.json()
                setIsSuccessful(true)
                setBlogs(data)
            } catch (error) {
                setIsSuccessful(false)
                setErrorMessage(error.message)
            }
        }
        fetchBlogs()
    }, [])

    //HTML renders pertaining on if the fetching of blogs was successful or not
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
            <div className="error-message">
                <h1>{errorMessage}</h1>
            </div>
            
        )
    }

        
}

export default BlogComponent
    