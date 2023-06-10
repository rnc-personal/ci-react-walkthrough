import React, { useState } from 'react'

export default function ControlledFormHooks() {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('Website');
    const [comments, setComments] = useState('Write your comment here');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your name</label>
                    <input value={name}
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        id="id-name"
                        name="name"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Your Category</label>
                    <select name="category" id="id-category" value={category}
                        onChange={
                            (e) => setCategory(e.target.value)
                        }>
                        <option value="website">Website</option>
                        <option value="order">Order Issue</option>
                        <option value="general">General Enquiry</option>
                    </select>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea name="comments" id="id-comments"
                            placeholder={comments}
                            onChange={
                                (e) => setComments(e.target.value)
                            }>
                        </textarea>
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
