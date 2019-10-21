import React, {Component} from 'react';
import './articles.scss';
import '../medcenters/medcenters.scss'
import ArticleCard from "./ArticleCard/ArticleCard";

import { connect } from "react-redux";

class Articles extends Component {

    render() {
        const {articles} = this.props;

        return (
            <div className="Articles">
                <div className="breadcrumbs">
                    <a href="/" className="breadcrumbs-item">Главная/</a>
                    <div className="breadcrumbs-item bold">Блог </div>
                </div>
                <div className="mainpage--title">
                    События в области медицины
                </div>
                <div className="article--card">
                    {
                        articles.map((article,index)=>
                            <ArticleCard
                                key={index}
                                article={article}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles.articles,
  })
  
  
  export default connect(
    mapStateToProps,
  )(Articles);