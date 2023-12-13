json.cartItem do
  json.extract! @cart_item, :id, :product_id, :quantity
end
