# frozen_string_literal: true

FactoryBot.define do
  factory :comment do
    name { 'MyString' }
    content { 'MyText' }
  end
end
