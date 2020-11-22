# frozen_string_literal: true
# 記事投稿
class Post < ApplicationRecord
 has_many :comments
 has_many :replies, through: :comments

  validates :title,   presence: true
  validates :content, presence: true, length: { in: 3..100}
  validates :name,    presence: true, length: { in: 2..20}
end
