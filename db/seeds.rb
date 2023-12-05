require 'faker'


User.create(email: "demo@user.io", name: "Demo User", password:"test123")


ActiveRecord::Base.connection.execute('TRUNCATE TABLE products RESTART IDENTITY CASCADE')


Product.destroy_all

# Create products
# 20
20.times do
  category_name = %w[Electronics Clothing Books Home\ Goods Toys].sample
  product = Product.create(
    name: Faker::Commerce.product_name,
    price: rand(1.0..300.00).round(2),
    description: Faker::Lorem.sentence(word_count: 10),
    rating: rand(1..5),
    category: category_name
  )
end
