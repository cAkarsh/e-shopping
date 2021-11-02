
import { client } from '../index.js';

export const getProducts = async (req, res) => {
    let getAllProducts = "SELECT * FROM eshopping.products"
    try {

        client.execute(getAllProducts, [], (err, result) => {
            if (err) {
                res.status(404).send({ msg: err })
            } else {
                res.status(200).json(result);
            }
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
        console.log(req);
    }
}

export const getProductsByTitle = async (req, res) => {
    let getAllProducts = `SELECT * FROM eshopping.products WHERE title LIKE '*${req.params.title}*' ALLOW FILTERING`
    try {

        client.execute(getAllProducts, [], (err, result) => {
            if (err) {
                res.status(404).send({ msg: err })
            } else {
                res.status(200).json(result);
            }
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
        console.log(req);
    }
}