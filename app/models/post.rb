# frozen_string_literal: true

class Post < ApplicationRecord
  has_many :comments
  has_many :replies, through: :comments
  accepts_nested_attributes_for :comments
  validates :title,   presence: true
  validates :content, presence: true, length: { in: 3..100 }
  validates :name,    presence: true, length: { in: 2..20 }
end
