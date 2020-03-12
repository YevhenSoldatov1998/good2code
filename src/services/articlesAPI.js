import {instance} from "./instance";

const articlesAPI = {
    getArticle: (pageSize) => {
        return instance.get(`?pageSize=${pageSize}&country=us&apiKey=fd868cb7d74b41d59cb8f6dc708c521c`)
            .then(res=> res.data.articles)

    }
}
export default articlesAPI