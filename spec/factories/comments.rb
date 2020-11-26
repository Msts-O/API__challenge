# frozen_string_literal: true

FactoryBot.define do
  factory :comment do
    name { '山田一郎' }
    content { 'あいうえお' }
  end
end
