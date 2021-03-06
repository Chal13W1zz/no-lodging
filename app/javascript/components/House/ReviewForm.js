import React from 'react'

const ReviewForm = (props) => {
    return (    
    <div className="wrapper">
        <form onSubmit={props.handleSubmit}>
            <div>Have an experience with {props.attributes.name}? share your review!</div>
            <div className="field">
                <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title"/>
            </div>
            <div className="field">
                <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description"/>
            </div>
            <div className="field">
                <div className="rating-container">
                    <div className="rating-title-text">Rate This House</div>
                    [Star Rating Goes Here]
                </div>
            </div>
            <button type="submit">Submit Your Review</button>
        </form>
    </div>
   
    )
}

export default ReviewForm