require 'faker'
require "open-uri"
require "json"
product_data = File.read("app/assets/seed-product-info.json")
product = JSON.parse(product_data)



Product.destroy_all
ActiveRecord::Base.connection.execute('TRUNCATE TABLE products RESTART IDENTITY CASCADE')

User.create(email: "demo@user.io", name: "Demo User", password:"test123")

puts "seeding home products..."

product["home"].each do |item|
    new_item = Product.create(
      name: item["name"],
      price: item["price"],
      description: item["description"],
      rating: item["rating"],
      category: item["category"]
      )


    aws_link = new_item.name.split.join("+")

    (1..3).each do |i|
      new_item.images.attach(
        io: URI.open("https://cagayan-seeds.s3.us-west-1.amazonaws.com/home/#{aws_link}/#{aws_link}-#{i}.jpg"),
        filename: "#{new_item.name}-#{i}"
      )
    end
end

puts "seeding electronics products..."
product["electronics"].each do |item|
  new_item = Product.create(
    name: item["name"],
    price: item["price"],
    description: item["description"],
    rating: item["rating"],
    category: item["category"]
    )

  aws_link = new_item.name.split.join("+")


  (1..3).each do |i|
    new_item.images.attach(
      io: URI.open("https://cagayan-seeds.s3.us-west-1.amazonaws.com/electronics/#{aws_link}/#{aws_link}-#{i}.png"),
      filename: "#{new_item.name}-#{i}"
    )
  end
end


puts "seeding clothing products..."
product["clothing"].each do |item|
  new_item = Product.create(
    name: item["name"],
    price: item["price"],
    description: item["description"],
    rating: item["rating"],
    category: item["category"]
    )


  aws_link = new_item.name.split.join("+")

  (1..3).each do |i|
    Product.last.images.attach(
      io: URI.open("https://cagayan-seeds.s3.us-west-1.amazonaws.com/clothing/#{aws_link}/#{aws_link}-#{i}.png"),
      filename: "#{new_item.name}-#{i}"
    )
  end
end


# puts "seeding health_and_beauty products..."
product["health_and_beauty"].each_with_index do |item, i|
  new_item = Product.create(
    name: item["name"],
    price: item["price"],
    description: item["description"],
    rating: item["rating"],
    category: item["category"]
    )

  aws_link = new_item.name.split.join("+")

  (1..3).each do |i|
    Product.last.images.attach(
      io: URI.open("https://cagayan-seeds.s3.us-west-1.amazonaws.com/health_and_beauty/#{aws_link}/#{aws_link}-#{i}.png"),
      filename: "#{new_item.name}-#{i}"
    )
  end
end

puts "all done"






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
