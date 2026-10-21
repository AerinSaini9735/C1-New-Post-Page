function QuestionPost() {
    return (
        <div>
            <div className="post-content">
                This section is designed based on the type of the post. It could be devoloped by conditional rendering.
                <span> For post a question, the following section would be appeared.</span>
            </div>
            <div className="question-title">
                <span>Title</span>
                <input type="search-box" className="question-input" placeholder = "Start your question with how, what, why, etc."></input>
            </div>
            <div className="question-problem">
                <p>Describe your problem</p>
                <textarea type="search-box" className="problem-input"></textarea>
            </div>
            <div className="tags-title">
                <span>Tags</span>
                <input type="search-box" className="tags-input" placeholder="Please add up to 3 tags to describe what your question is about e.g., java"></input>
            </div>
       
        </div>
    );
}

export default QuestionPost;