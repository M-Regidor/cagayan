# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  author_name :string           not null
#  body        :text             not null
#  rating      :integer          not null
#  author_id   :bigint           not null
#  product_id  :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  validates :rating, presence: true, numericality: { less_than_or_equal_to: 5 }
  validates :title, length: {in: 3..50}
  validates :body, length: {in: 10..1000}
  validates :author_id, :product_id, presence: true
  validates :author_name, presence: true

  belongs_to :product

  belongs_to :author,
    class_name: :User
end
