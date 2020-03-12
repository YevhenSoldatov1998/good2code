import React from 'react'
import ArticleItem from "./ArticleItem";

const Articles = ({articles}) => (
        <div className={"articles"}>
            {articles && articles.map(article => {
                return (
                    <ArticleItem article={article} key={article.source.id + article.source.name}/>
                )
            })}
        </div>
    )

export default Articles