json.extract! @product, :id, :name, :price, :description, :rating, :category

# json.imgUrls do
#   @product.image.each_with_index do |img, idx|
#     json.set! idx do
#       json.url url_for(img)
#     end
#   end
# end

json.imgUrls do
  @product.image.each_with_index do |img, idx|
    json.set! idx, url_for(img)
  end
end

# json.imgUrl1 @product.image.attached? ? url_for(@product.image) : nil
# json.imgUrl2 @product.image.attached? ? url_for(@product.image) : nil
# json.imgUrl3 @product.image.attached? ? url_for(@product.image) : nil
