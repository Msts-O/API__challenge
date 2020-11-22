# frozen_string_literal: true

module Api
  module V1
    class PostsController < ApplicationController
      before_action :set_post, only: %i[edit update destroy]

      def index
        @posts = Post.all
      end

      def new
        @post = Post.new
      end

      def create
        @post = Post.new(post_params)

        respond_to do |format|
          if @post.save
            format.html { redirect_to '/api/v1/posts/index', notice: 'Post is created successfully' }
            format.json { render :index, status: :ok }
          else
            format.html { render :new }
            format.json { render :new, status: :bad_request }
          end
        end
      end

      def show
        @post = Post.find_by(params[:id])
      end

      def edit; end

      def update
        respond_to do |format|
          if @post.update(post_params)
            format.html { redirect_to controller: :show, notice: 'Post is updated successfully' }
            format.json { render :show, status: :updated }
          else
            format.html { render :edit }
            format.json { render :edit, status: :error }
          end
        end
      end

      def destroy
        respond_to do |format|
          if @post.destroy
            format.html { redirect_to api_v1_posts_path, notice: 'Post is destroyed successfully' }
            format.json { head :no_content }
          end
        end
      end

      private

      def set_post
        @post = post.find(params[:id])
      end

      def post_params
        params.permit(:title, :content, :name)
      end
    end
  end
end
