import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card bg-dark m-5">
          <img src={imageUrl} className="card-img-top" alt="..." style={{width: "318px", height: "200px"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}... <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{source}</span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
            <a target="_blank" rel="noreferrer" href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
