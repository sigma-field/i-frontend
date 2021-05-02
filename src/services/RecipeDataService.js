import http from "../http-common";

class RecipeDataService {
  getAll() {
    return http.get("/recipes");
  }

  get(id) {
    return http.get(`/recipes/${id}`);
  }

  getComments(id) {
    return http.get(`/recipes/${id}/comments`);
  }

  create(data) {
    return http.post("/recipes", data);
  }

  update(id, data) {
    return http.post(`/recipes/${id}`, data);
  }

  delete(id) {
    return http.delete(`/recipes/${id}`);
  }

  deleteAll() {
    return http.delete(`/recipes`);
  }
}

export default new RecipeDataService();
