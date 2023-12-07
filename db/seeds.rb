require 'faker'
require "open-uri"
require "json"


User.create(email: "demo@user.io", name: "Demo User", password:"test123")


ActiveRecord::Base.connection.execute('TRUNCATE TABLE products RESTART IDENTITY CASCADE')
product_data = File.read("app/assets/seed-product-info.json")

product = JSON.parse(product_data)


Product.destroy_all

puts "making home products..."
product["home"].each_with_index do |item, i|
    Product.create(
      name: item["name"],
      price: item["price"],
      description: item["description"],
      rating: item["rating"],
      category: item["category"]
      )
end


# file = File.open("app/coffee/coffee-mug-1.jpg")

# coffee.img.attach(io: file, filename: "coffee-1")






# Create products
# 20
# 25.times do
#   category_name = %w[Electronics Clothing Books Home\ Goods Toys].sample
#   product = Product.create(
#     name: Faker::Commerce.product_name,
#     price: rand(1.0..300.00).round(2),
#     description: Faker::Lorem.sentence(word_count: 25),
#     rating: rand(1..5),
#     category: category_name
#   )
# end
