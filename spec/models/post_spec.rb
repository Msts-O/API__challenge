# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Post, type: :model do
  before do
    @post = FactoryBot.build(:post)
  end

  describe '新規登録' do
    context '新規登録が出来た時'
    it '全ての条件をクリアした時のみ登録が出来る' do
      expect(@post).to be_valid
    end
  end
  describe '新規登録不可' do
    context '新規登録が出来ない時'
    it 'titleが空で登録が出来ない時' do
      @post.title = nil
      @post.valid?
      expect(@post.errors.full_messages).to include("Title can't be blank")
    end
    it 'nameがからで登録が出来ない時' do
      @post.name = nil
      @post.valid?
      expect(@post.errors.full_messages).to include("Name can't be blank")
    end
    it 'contentが空で登録が出来ない時' do
      @post.content = nil
      @post.valid?
      expect(@post.errors.full_messages).to include("Content can't be blank")
    end
    it 'nameが1文字以下の場合' do
      @post.name = 'a'
      @post.valid?
      expect(@post.errors.full_messages).to include('Name is too short (minimum is 2 characters)')
    end
    it 'contentが2文字以下の場合' do
      @post.content = 'aa'
      @post.valid?
      expect(@post.errors.full_messages).to include('Content is too short (minimum is 3 characters)')
    end
  end
end
