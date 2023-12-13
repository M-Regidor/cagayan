# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  product_id :bigint           not null
#  user_id    :bigint           not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
  validates :quantity, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :product, presence: true
  validates :user, presence: true

  belongs_to :product
  belongs_to :user
end
