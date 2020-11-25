# frozen_string_literal: true

class Comment < ApplicationRecord
  belongs_to :post
  has_many   :replies

  validates :name,    presence: true, length: { in: 3..10 }
  validates :content, presence: true, length: { in: 4..500 }
  # validates :post_id, presence: true
end
