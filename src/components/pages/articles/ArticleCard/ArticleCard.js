import React from 'react';
import './ArticleCard.scss'

export default function ArticleCard(props) {
        const {article} = props;

        return(
            <div className="ArticleCard">
                <div className="article-image"><img className="img-logo" src={article.img} alt="" /></div>
                <div className="article--title"><div className="title--item">{article.title}</div></div>
                <div className="article--date"> {article.date}</div>
            </div>
        )
}