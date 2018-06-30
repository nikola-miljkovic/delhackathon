import { Router } from 'express'
import { Product, Category, SubCategory, } from '../services/mongoose/models'

const router = new Router()

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */

router.get("/hello", function(req, res) {
    res.status(200).send("Welcome to our restful API");
});

/**
 * @api {get} /product/ Request list of all products
 * @apiName GetProducts
 * @apiGroup Product
 */
router.get("/product/", function(req, res) {
    Product.find({}, function (err, products) {
        console.log(products);
        res.send(products);
    });
});

/**
 * @api {get} /product/category/:name/ Request list of products filtered by category name
 * @apiName GetProductsByCategory
 * @apiGroup Product
 */
router.get("/product/category/:name/", function(req, res) {
    Product.findByCategory(req.params.name, function (err, products) {
        res.send(products);
    });
});

/**
 * @api {get} /category/ Get all categories
 * @apiName GetCategories
 * @apiGroup Product
 */
router.get("/category/", function(req, res) {
    Category.find({}, function (err, category) {
        console.log(category);
        res.send(category);
    });
})

/**
 * @api {get} /subcategory/ Get all subcategories
 * @apiName GetSubcategories
 * @apiGroup Product
 */
router.get("/subcategory/", function(req, res) {
    SubCategory.find({}, function (err, SubCategory) {
        console.log(SubCategory);
        res.send(SubCategory);
    });
})

/**
 * @api {get} /subcategory/:category Request list of subcategories filtered by category name
 * @apiName GetSubcategoryByCategoryName
 * @apiGroup Product
 */
router.get("/subcategory/:category", function(req, res) {
    SubCategory.findByCategory(req.params.category, function (err, SubCategory) {
        console.log(SubCategory);
        res.send(SubCategory);
    });
})


export default router
