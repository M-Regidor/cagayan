class AddTitleReviews < ActiveRecord::Migration[7.1]
  def change
    add_column :reviews, :title, :string
  end
end
