import http from "../http-common";

class AboutDataService {
    getAll() {

        return http.get("/about-us");
    }


}

export default new AboutDataService();