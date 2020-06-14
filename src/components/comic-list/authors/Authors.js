import React, {Component} from "react";

class Authors extends Component{
    constructor(){
        super();
    }
    render(){
        const authors = this.props.Author;
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
}
export default Authors;