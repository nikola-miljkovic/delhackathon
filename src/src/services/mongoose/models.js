import mongoose from './index'

var Schema = mongoose.Schema
var productSchema = new Schema({"Category": String}, { strict: false, collection: 'product', })
productSchema.statics.findByCategory = function(category, cb) {
    return this.find({ Category: category}, cb);
}
var Product = mongoose.model('Product', productSchema)

var categorySchema = new Schema({"CategoryName": String}, { strict: false, collection: 'category', });
var Category = mongoose.model('Category', categorySchema)

var subCategorySchema = new Schema({"CategoryName": String, "SubCategoryName": String,}, { strict: false, collection: 'subcategory', });
subCategorySchema.statics.findByCategory = function(category, cb) {
    return this.find({ CategoryName: category}, cb);
}
var SubCategory = mongoose.model('SubCategorySchema', subCategorySchema)

export {
  Product,
  Category,
  SubCategory,
}