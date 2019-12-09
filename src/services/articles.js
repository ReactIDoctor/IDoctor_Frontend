import api from './api';

export function getArticles() {
    return api.get(`/articles/`, {});
}

