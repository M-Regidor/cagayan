# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :text             not null
#  rating      :float            not null
#  users_id    :bigint           not null
#  products_id :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  validates :rating, presence: true, numericality: { less_than_or_equal_to: 5 }
  validates :body, length: {in: 10..300, message: "Review body cant be blank or must be over 10 characters"}
  validates :user_id, :product_id, presence: true

  belongs_to :product

  belongs_to :user
end
