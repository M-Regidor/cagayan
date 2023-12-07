json.extract! @product, :id, :name, :price, :description, :rating, :category
json.imgUrl @product.img.attached? ? url_for(@product.img) : nil
