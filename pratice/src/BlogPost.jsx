function BlogPost(post) {
    const title = {
        fontSize: '20px'
    }
    const body = {
        border: '2px solid black',
        borderRadius: '10px',
        margin: '40px'
    }
    return (

        <div style={body}>

            <p style={title}>Author:{post.author}</p>
            <p>title:{post.title}</p>
            <p>Description:{post.description}</p>

        </div>
    )
}
export default BlogPost