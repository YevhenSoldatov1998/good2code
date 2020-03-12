import React, {useEffect} from 'react';
import './App.css';
import Articles from './components/Articles/Articles'
import {connect} from "react-redux";
import {getArticle} from "./redux/articleReducer";
import Preloader from "./components/common/Preloader";
import ErrorMessage from "./components/common/ErrorMessage";

const App = ({getArticle, isFetching, isError, errorMessage, ...props}) => {
    const content = isFetching ? <Preloader/> : <Articles {...props}/>
    useEffect(() => {
        getArticle(5)
    }, []);
    return (
        <main>
            {isError ? <ErrorMessage>{errorMessage}</ErrorMessage> : content}
        </main>
    )
}
const mapStateToProps = (state) => {
    return {
        articles: state.article.articles,
        isFetching: state.article.isFetching,
        isError: state.article.isError,
        errorMessage: state.article.errorMessage
    }
}
export default connect(mapStateToProps, {getArticle})(App);
