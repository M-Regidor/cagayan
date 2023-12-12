class Editreviewstable < ActiveRecord::Migration[7.1]
  def change
    rename_column :reviews, :users_id, :user_id
    rename_column :reviews, :products_id, :product_id
  end
end
