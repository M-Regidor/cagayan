class Changeauthor < ActiveRecord::Migration[7.1]
  def change
    rename_column :reviews, :author_name, :name
  end
end
