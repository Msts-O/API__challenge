# frozen_string_literal: true

# db_base
class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title,   null: false, comment: '投稿内容'
      t.text   :content, null: false
      t.string :name,    null: false

      t.timestamps
    end
  end
end
