import http from "../http-common";

class CategoryDataService {
    getAll() {

        return http.get("/categories");
    }

    get(id) {
        return http.get(`/categories/${id}`);
    }

    getCategoryRecipes(id) {
        return http.get(`/categories/${id}/recipes`);
    }

    create(data) {
        return http.post("/categories", data);
    }

    update(id, data) {
        return http.post(`/categories/${id}`, data);
    }

    delete(id) {
        return http.delete(`/categories/${id}`);
    }

    deleteAll() {
        return http.delete(`/categories`);
    }


}

export default new CategoryDataService();