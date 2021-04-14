import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

const PostList = () => {
    const { posts, getAllPosts } = useContext(PostContext);
    const { searchByTitle } = useContext(PostContext);
    const [searchedTitle, setSearchedTitle] = useState("")

    useEffect(() => {
        if (searchedTitle !== "") {

            searchByTitle(searchedTitle);

        } else {
            getAllPosts();
        }
    }, [searchedTitle])

    const handleInputChange = (event) => {
        setSearchedTitle(event.target.value)
    }

    return (
        <>

            <div className="container">
                <div className="row justify-content-center">

                    <label >Search By Title:</label>
                    <input
                        className="search"
                        id="search"
                        name="search"
                        type="text"
                        placeholder="Enter Title"
                        onChange={handleInputChange}
                    ></input>

                </div>
            </div >

            <div className="container">
                <div className="row justify-content-center">
                    <div className="cards-column">
                        {posts.map((post) => (
                            <Post key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default PostList;