# frozen_string_literal: true

module Api
  module V1
    class PostsController < ApplicationController
      before_action :set_post, only: %i[show update destroy]

      def index
        @posts = Post.all
      end

      def search
        @posts= Post.all
        respond_to do |format|
         format.json
        end
      end

      def create
        @post = Post.new(post_params)
        if @post.save
          render json: @post, status: :created
        else
          render json: @post, status: :bad_request
        end
      end

      def update
        if @post.update(post_params)
          render json: @post, status: :ok
        else
          render json: @post, status: :bad_request
        end
      end

      def destroy
        if @post.destroy
          render json: @post, status: :ok
        else
          render json: @post, status: :bad_request
        end
      end

      def show
        @post = Post.find(params[:id])
      end

      private

      def set_post
        @post = Post.find(params[:id])
      end

      def post_params
        params.permit(:title, :content, :name)
      end
    end
  end
end
