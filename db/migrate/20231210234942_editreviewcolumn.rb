class Editreviewcolumn < ActiveRecord::Migration[7.1]
  def change
    rename_column :reviews, :products_id, :product_id
  end
end
