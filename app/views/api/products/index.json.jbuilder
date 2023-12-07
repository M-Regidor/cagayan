@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :price, :rating, :category
    json.imgUrl product.image.attached? ? url_for(product.image.first) : nil
  end
end
