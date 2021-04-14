import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);

    const getAllPosts = () => {
        return fetch("/api/post")
            .then((res) => res.json())
            .then(setPosts);
    };

    const addPost = (post) => {
        return fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
    };

    const searchByTitle = (searchedTitle) => {
        return fetch(`/api/Post/searchByTitle?q=${searchedTitle}&sortDesc=true`)
            .then((res) => res.json())
            .then(setPosts);
    }

    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost, searchByTitle }}>
            {props.children}
        </PostContext.Provider>
    );
};