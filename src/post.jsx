import { useState } from "react";
import QuestionPost from './question-post.jsx'
import ArticlePost from './article-post.jsx'
import Header from "./header.jsx";
function Post() {
    const [postType, setPostType] = useState("Question");
    let postContent;
    if (postType === "Question") {
        postContent = <QuestionPost />
    }
    else {
        postContent = <ArticlePost />
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            // Display success popup
            alert("Your post has been sent successfully!");
        } catch (error) {
            // Display error popup
            alert("An error occurred while sending your post. Please try again.");
        }
    };

    return (
        <>
            <Header />
            <form className="post-container" onSubmit={handleSubmit}>
                <div className="new-post">
                    <p>New Post</p>
                </div>
                <div className="post-type">
                    <p>Select Post Type:</p>
                    <input type="radio" className="post-radio" value="Question" checked={postType === "Question"} onChange={(e) => setPostType(e.target.value)} />
                    <p>Question</p>
                    <input type="radio" className="post-radio" value="Article" checked={postType === "Article"} onChange={(e) => setPostType(e.target.value)} />
                    <p>Article</p>
                </div>
                <div className="post-info">
                    what do you want to ask or share
                </div>
                <div className="post-section">
                    {postContent}
                </div>
                <button className="new-post-button" type="submit">Post</button>
            </form>
        </>
    );
}

export default Post;