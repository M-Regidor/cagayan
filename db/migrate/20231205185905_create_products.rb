class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.decimal :price, precision: 8, scale: 2
      t.text :description, null: false
      t.float :rating, null: false
      t.string :category, null: false
      t.timestamps
    end
  end
end
