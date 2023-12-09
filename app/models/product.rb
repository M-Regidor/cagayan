# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  price       :float
#  description :text             not null
#  rating      :float            not null
#  category    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
  validates :name, length: {in: 3..200}
  validates :price,
  presence: true,
  numericality: { greater_than_or_equal_to: 1.0, less_than_or_equal_to: 999999.99 }
  validates :description, length: {in: 3..300}
  validates :rating, presence: true, numericality: { less_than_or_equal_to: 5 }
  validates :category, presence: true

  has_many_attached :images
end
