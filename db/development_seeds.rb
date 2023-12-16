require "json"

product_data = File.read("app/assets/seed-product-info.json")
review_data = File.read("app/assets/seed-reviews.json")
product = JSON.parse(product_data)
reviews = JSON.parse(review_data)



User.destroy_all
Product.destroy_all
Review.destroy_all
CartItem.destroy_all
ActiveRecord::Base.connection.execute('TRUNCATE TABLE products RESTART IDENTITY CASCADE')
ActiveRecord::Base.connection.execute('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
ActiveRecord::Base.connection.execute('TRUNCATE TABLE cart_items RESTART IDENTITY CASCADE')
ActiveRecord::Base.connection.execute('TRUNCATE TABLE reviews RESTART IDENTITY CASCADE')

User.create(email: "admin@cagayan.com", name: "admin", password: "123456")
User.create(email: "demo@user.io", name: "Demo User", password:"test123")

puts "development seeds"
puts "seeding home products..."

product["home"].each do |item|
    new_item = Product.create(
      name: item["name"],
      price: item["price"],
      description: item["description"],
      category: item["category"]
      )
end

puts "seeding electronics products..."
product["electronics"].each do |item|
  new_item = Product.create(
    name: item["name"],
    price: item["price"],
    description: item["description"],
    category: item["category"]
    )
end


puts "seeding clothing products..."
product["clothing"].each do |item|
  new_item = Product.create(
    name: item["name"],
    price: item["price"],
    description: item["description"],
    category: item["category"]
    )
end


# puts "seeding health_and_beauty products..."
product["health_and_beauty"].each_with_index do |item, i|
  new_item = Product.create(
    name: item["name"],
    price: item["price"],
    description: item["description"],
    category: item["category"]
    )

end
puts "seeding reviews"
reviews["reviews"].each do |review|
  new_review = Review.create(
    name: review["name"],
    title: review["title"],
    body: review["body"],
    rating: review["rating"],
    author_id: review["author_id"],
    product_id: review["product_id"]
  )
end


# Review.create(name: "Katie", title: "Awesome", body:"This cookware set exceeded my expectations! The durable non-stick coating makes cooking and cleaning a breeze. The stylish design adds a touch of elegance to my kitchen. I appreciate the even heat distribution and sturdy build. A fantastic investment for any home chef!", rating: 3, author_id: 1, product_id: 1)

# Review.create(name: "Bob",title: "Exceptional Cookware Set!", body:"This cookware set is a kitchen game-changer! The non-stick surface is a breeze to clean, and the heat distribution is superb. It elevates my cooking experience, making every meal a delight. The sleek design adds a touch of elegance, and the durability ensures long-lasting performance. From searing to simmering, it handles everything effortlessly. Plus, the comfortable handles and quality construction make it a joy to cook with. I've tried various sets, but this one stands out. It's a worthwhile investment for any home chef. Highly recommended!", rating: 4, author_id:1, product_id: 1)


# Review.create(name: "Steve", title: "Versatile and Durable Cookware", body: "This cookware set is a kitchen essential! The versatile pieces cater to all my cooking needs. From sautéing to boiling, each pot and pan performs exceptionally. The non-stick coating ensures easy food release, and cleaning is a breeze. I appreciate the sturdy construction that withstands high heat and daily use. The ergonomic handles provide a comfortable grip, enhancing the overall cooking experience. This set strikes the perfect balance between functionality and style. Whether you're a novice or seasoned chef, it's a reliable companion in the kitchen. A wise investment for anyone passionate about cooking!", rating: 3, author_id: 1, product_id: 1)


puts "all done"
