@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :price, :rating, :category
    json.imgUrl product.img.attached? ? url_for(product.img) : nil
  end
end
