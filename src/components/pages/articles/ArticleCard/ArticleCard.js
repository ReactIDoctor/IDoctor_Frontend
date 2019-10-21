import React from 'react';
import './ArticleCard.scss'
// import Example from "../forHooks";

export default function ArticleCard(props) {
        const {article} = props;

        return(
            <div className="ArticleCard">
                {/*<Example></Example>*/}
                <div className="article-image"><img className="img-logo" alt="Article-logo" src={article.img} /></div>
                <div className="article--title"><div className="title--item">{article.title}</div></div>
                <div className="article--date"> {article.date}</div>
            </div>
        )
}