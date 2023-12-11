class Addauthorname < ActiveRecord::Migration[7.1]
  def change
    add_column :reviews, :author_name, :string
  end
end
