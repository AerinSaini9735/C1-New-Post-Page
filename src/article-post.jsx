function ArticlePost() {
    return (
        <div>
            <div className="post-content">
                This section is designed based on the type of the post. It could be devoloped by conditional rendering.
                <span> For post an article, the following section would be appeared.</span>
            </div>
            <div className="article-title">
                <p>Title</p>
                <input type="search-box" className="article-input" placeholder="Enter a descriptive title"></input>
            </div>
            <div>
                <p>Abstract</p>
                <textarea type="search-box"className="abstract-input" placeholder="Enter a 1-paragraph abstract"></textarea>
            </div>
            <div>
                <p>Article Text</p>
                <textarea type="text" className="abstract-input" placeholder="Enter a 1-paragraph abstract"></textarea>
            </div>
            <div className="tags-title">
                <span>Tags</span>
                <input type="text" className="tags-input" placeholder="Please add up to 3 tags to describe what your article is about e.g., java"></input>
            </div >
        </div>
    )
}

export default ArticlePost;