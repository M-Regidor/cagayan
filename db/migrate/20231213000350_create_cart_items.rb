class CreateCartItems < ActiveRecord::Migration[7.1]
  def change
    create_table :cart_items do |t|
      t.references :product, null: false, index: true
      t.references :user, null: false, index: true
      t.integer :quantity, null: false
      t.timestamps
    end
  end
end
