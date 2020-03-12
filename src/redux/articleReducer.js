// CONSTANTS
import articlesAPI from "../services/articlesAPI";

const GET_ARTICLE = 'good2code/redux/GET_ARTICLE';
const GOT_FAILED = 'good2code/redux/GOT_FAILED';
const IS_FETCHING = 'good2code/redux/IS_FETCHING';

// ACTION CREATOR
const getArticleSuccess = articles => ({type: GET_ARTICLE, articles});
const getArticleFailed = (message) => ({type: GOT_FAILED, message});
const toggleIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});

// THUNK CREATOR
export const getArticle = (pageSize) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))
        const articles = await articlesAPI.getArticle(pageSize);
        dispatch(getArticleSuccess(articles))
        dispatch(toggleIsFetching(false))
    } catch (e) {
        dispatch(getArticleFailed('Sorry , server access denied'))
    }

}

// INITIAL STATE
const initialState = {
    articles: [
        {
            source: {
                id: 1,
                name: null
            },
            author: null,
            title: null,
            publishedAt: null,
            urlToImage: null
        }
    ],
    errorMessage: '',
    isError: false,
    isFetching: true
};
// REDUCER
export const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTICLE:
            return {
                ...state,
                isError: false,
                articles: action.articles,
                errorMessage: ''
            };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case GOT_FAILED:
            return {
                ...state,
                isError: true,
                errorMessage: action.message
            }
        default:
            return state
    }
};
