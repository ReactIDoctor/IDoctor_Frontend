import React, {Component, useState} from 'react';
import './ArticleCard.scss'
import Example from "../forHooks";

export default class ArticleCard extends Component {
    render() {
        const {article} = this.props;

        return(
            <div className="ArticleCard">
                {/*<Example></Example>*/}
                <div className="article-image"><img className="img-logo" src={article.img} /></div>
                <div className="article--title"><div className="title--item">{article.title}</div></div>
                <div className="article--date"> {article.date}</div>
            </div>
        )
    }
}