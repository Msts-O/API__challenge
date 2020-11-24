# frozen_string_literal: true

FactoryBot.define do
  factory :post do
    title   { 'test' }
    name    { '佐藤太郎' }
    content { 'テスト書いてます。' }
  end
end
