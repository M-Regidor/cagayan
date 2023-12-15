# Cagayan

An Amazon clone project named Cagayan that incorporates features such as user account creation, exploration of items, and leaving reviews on products.

## Live Site

[Explore Cagayan here](https://cagayan.onrender.com/)

## Technologies Used

- **Frontend:**
  - React
  - Redux
  - HTML
  - CSS

- **Backend:**
  - Ruby on Rails
  - AWS S3 (for storage)

- **Hosting:**
  - Render

### Features Highlights

## Products

Users can explore products listed on Cagayan by keywords or categories.

## Challenges Faced

The products contained a lot of data that I had to keep organized and easily able to create more when needed.

## Solutions

I stored the product data in a JSON file format, so I can easily add more during development.

```json
{
  "home": [
    {
      "name": "Chef's Choice Premium Stainless Steel Cookware Set",
      "price": "149.99",
      "description": "High-quality stainless steel cookware set featuring a variety of pots and pans. Durable, non-reactive, and suitable for a wide range of cooking styles.",
      "category": "Home and Kitchen Appliances",
    }
}
```

# Two different seeds
Made two different seed files, one for production and development, to keep down the usage of my resources on AWS.

``` ruby
if Rails.env.development?
  load(Rails.root.join('db', 'development_seeds.rb'))
elsif Rails.env.production?
  load(Rails.root.join('db', 'production_seeds.rb'))
end
```
# Function for using local images
Incorporated a function that would search a local directory for image files during development. As long as the directories follow a naming format, it would use the file paths in the directory for local images during development, making it faster for me to add more product data.
``` ruby
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
  rating = Review.where(product_id: product.id).average(:rating).round

  json.set! product.id do
    json.extract! product, :id, :name, :price, :category
    json.imgUrls product.images.attached? ? [url_for(product.images.first)] : file_paths(product.name)
    json.rating rating
  end
end
```
 
