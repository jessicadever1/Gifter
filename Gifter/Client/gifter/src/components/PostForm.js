import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"

export const PostForm = () => {

    const { addPost, getAllPosts } = useContext(PostContext)

    const [post, setPost] = useState({
        "id": 0,
        "Title": "",
        "ImageUrl": "",
        "Caption": "",
        "UserProfileId": 0,
        "DateCreated": ""
    })

    useEffect(() => {
        getAllPosts(post.id)
            .then(post => {
                setPost(post)
            })
    }, [])

    const handleClickSavePost = (event) => {
        event.preventDefault()

        addPost({
            Title: post.Title,
            ImageUrl: post.ImageUrl,
            Caption: post.Caption,
            UserProfileId: post.UserProfileId,
            DateCreated: post.DateCreated
        })
    }

    return (
        <section className="">
            <form className="">
                <h2>New Post: </h2>
                <fieldset>
                    <div className="">
                        <label htmlFor="title">Post title:</label>
                        <input type="text" id="title" required autoFocus className="" placeholder="Post title" value={post.Title} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="">
                        <label htmlFor="caption">Caption:</label>
                        <input type="text" id="caption" required autoFocus className="" placeholder="Post caption" value={post.Caption} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="">
                        <label htmlFor="date">Date Created:</label>
                        <input type="date" id="date" required autoFocus className="" placeholder="" value={post.DateCreated} />
                    </div>
                </fieldset>
                <div className="centerReviewSubmitBtn">
                    <button id={post.id} className="btn btn-primary"
                        onClick={
                            handleClickSavePost
                        }>
                        Save Post
                    </button>
                </div>
            </form>
        </section>
    )

}