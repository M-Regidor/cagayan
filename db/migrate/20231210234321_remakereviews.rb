class Remakereviews < ActiveRecord::Migration[7.1]
  def change
    drop_table :reviews

    create_table :reviews do |t|
      t.string :title, null: false
      t.string :author_name, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.references :author, null: false, foreign_key: {to_table: :users}
      t.references :products, null: false, index: true
      t.timestamps
    end
  end
end
