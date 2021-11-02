import axios from "axios";

export default {

    // Gets products
    getAllProducts: function () {
        return axios.get("http://localhost:9042/products");
    }

};