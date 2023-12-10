class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.float :rating, null: false
      t.references :users, null: false, index: true
      t.references :products, null: false, index: true
      t.timestamps
    end
  end
end
