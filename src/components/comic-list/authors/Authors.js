import React from "react";

function Authors(props){
    const authors = props.Author;
    return (
        <div class="author">
            <p>By &nbsp;
                {authors.map(author => (
                    <a target="_blank" href={author.resourceURI}>{`${author.name} `}</a>
                ))}
            </p>
        </div>
    );
}
export default Authors;