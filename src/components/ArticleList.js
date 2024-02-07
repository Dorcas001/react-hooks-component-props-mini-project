import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const article = posts.map((posts) =>(
    <Article key={posts.id} name ={posts.title} date={posts.date} preview = {posts.preview}/>
    ));
    return(

    <main>{article}</main>)

}

export default ArticleList