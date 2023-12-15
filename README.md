# Cagayan

Cagayan is an Amazon clone project that emulates the renowned e-commerce platform. It incorporates a range of features to deliver a comprehensive shopping experience. Here's what you can expect:

- **User Account Creation:** Tailor your shopping experience by creating a personalized user account on Cagayan.

- **Product Exploration:** Discover a diverse range of products on Cagayan with the ability to search by keywords or explore various categories.

- **Review System:** Leave your mark by sharing product reviews and ratings.

- **Shopping Cart and Checkout:** Seamlessly add items to your cart and proceed through a secure checkout process.



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



## Features Highlights

### Products

Users can explore products listed on Cagayan by keywords or categories.

### Challenges Faced

Efficiently managing and displaying product details, including images, while optimizing AWS resource usage.

### Solutions

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

#### Dual Seed Files
Optimize resource usage with separate seed files for development and production environments.

``` ruby
if Rails.env.development?
  load(Rails.root.join('db', 'development_seeds.rb'))
elsif Rails.env.production?
  load(Rails.root.join('db', 'production_seeds.rb'))
end
```
#### Function for using local images
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
 
### Future Features
- Q&A for products
- Review likes (Users can like reviews if they find them helpful)