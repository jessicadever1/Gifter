import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../providers/PostProvider";

const PostList = () => {
    const { searchByTitle } = useContext(PostContext);
    const [searchedTitle, setSearchedTitle] = useState("")

    useEffect(() => {
        search();
    }, []);

    const handleSearchBtnClick = () => {

    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <label for="search">Search By Title:</label>
                <input className="search" id="search" name="search" type="text" placeholder="Enter Title"></input>
                <button onClick={handleSearchBtnClick}>Search</button>
            </div>
        </div>
    );
};

export default PostList;