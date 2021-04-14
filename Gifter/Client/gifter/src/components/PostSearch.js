import React, { useContext, useState } from "react";
import { PostContext } from "../providers/PostProvider";

const PostSearch = () => {
    const { searchByTitle } = useContext(PostContext);
    const [searchedTitle, setSearchedTitle] = useState("")


    const handleInputChange = (event) => {
        setSearchedTitle(event.target.value)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <label >Search By Title:</label>
                <input
                    className="search"
                    id="search"
                    name="search"
                    type="text"
                    placeholder="Enter Title"
                    onClick={handleInputChange}
                ></input>
                <button onClick={(event) => {
                    event.preventDefault();
                    searchByTitle(searchedTitle)
                }}>Search</button>
            </div>
        </div >
    );
};

export default PostSearch;