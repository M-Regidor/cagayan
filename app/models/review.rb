# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  rating     :float            not null
#  author_id  :bigint           not null
#  product_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
  validates :rating, presence: true, numericality: { less_than_or_equal_to: 5 }
  validates :body, length: {in: 10..300, message: "Review body can't be blank or must be over 10 characters"}
  validates :author_id, :product_id, presence: true

  belongs_to :product

  belongs_to :author,
    class_name: :User
end
