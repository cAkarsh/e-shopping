import axios from "axios";

export default {

    // Gets products
    getAllProducts: function () {
        return axios.get("https://fakestoreapi.com/products");
    }

};