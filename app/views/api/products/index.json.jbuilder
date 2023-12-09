@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :price, :rating, :category
    json.imgUrls product.images.attached? ? [url_for(product.images.first)] : []
  end
end
