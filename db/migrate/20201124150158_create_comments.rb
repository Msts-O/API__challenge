# frozen_string_literal: true

class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :name
      t.text   :content
      t.references :post, foreign_key: true

      t.timestamps
    end
  end
end
