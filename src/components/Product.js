const product=({post}) =>{
    return(
        <div>
            <div>
                <p>{post.title}</p>

            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <img src={post.image} height={200} width={150}></img>
            </div>
            <div>
                <p>${post.price}</p>
            </div>
            <div>
                <button>

                </button>
            </div>
        </div>
    )
}
export default product;