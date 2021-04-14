import React, { useContext, useState } from "react";
import { PostContext } from "../providers/PostProvider";

const PostList = () => {
    const { searchByTitle } = useContext(PostContext);
    const [searchedTitle, setSearchedTitle] = useState("")


    const handleInputChange = (event) => {
        setSearchedTitle(event.target.value)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <label for="search">Search By Title:</label>
                <input
                    className="search"
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Enter Title"
                    onclick={handleInputChange}
                    value={searchedTitle}></input>
                <button onClick={(event) => {
                    event.preventDefault();
                    searchByTitle(searchedTitle)
                }}>Search</button>
            </div>
        </div >
    );
};

export default PostList;