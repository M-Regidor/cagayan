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

end



Review.create(body:"This cookware set exceeded my expectations! The durable non-stick coating makes cooking and cleaning a breeze. The stylish design adds a touch of elegance to my kitchen. I appreciate the even heat distribution and sturdy build. A fantastic investment for any home chef!", rating: 3.8, author_id: 1, product_id: 1)

puts "all done"
