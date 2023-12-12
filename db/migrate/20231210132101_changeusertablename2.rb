class Changeusertablename2 < ActiveRecord::Migration[7.1]
  def change
    add_foreign_key :reviews, :users, column: :author_id
  end
end
