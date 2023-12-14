total_price = (@cart_item.product.price * @cart_item.quantity).round(2)

json.cartItem do
  json.extract! @cart_item, :id, :product_id, :quantity
  json.totalPrice  total_price
end
