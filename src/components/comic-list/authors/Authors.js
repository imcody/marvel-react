import React, {Component} from "react";
import md5 from "md5";

class Authors extends Component{
    render(){
        const authors = this.props.Author;
        return (
            <div className="author">
                <p>By &nbsp;
                    {authors.map(author => (
                        <a target="_blank" rel="noopener noreferrer" key={md5(author.name)} href={author.resourceURI}>{`${author.name} `}</a>
                    ))};
                </p>
            </div>
        );
    }
}
export default Authors;