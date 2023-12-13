def file_paths(product_name)
  dir_path = "frontend/public/assets/product-images/#{product_name}"
  if File.directory?(dir_path)
    files = Dir.entries(dir_path).select { |file| File.file?(File.join(dir_path, file)) }

    file_path = File.join(dir_path, files.first)
    [file_path.to_s[15..-1]]
  else
    Array.new()
  end

end

@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :price, :category
    json.imgUrls product.images.attached? ? [url_for(product.images.first)] : file_paths(product.name)
  end
end
