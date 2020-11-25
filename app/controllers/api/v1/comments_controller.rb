# frozen_string_literal: true

module Api
  module V1
    class CommentsController < ApplicationController
      def create
        @comment = Comment.new(comment_params)
        if @comment.save
          render json: @comment, status: :ok
        else

          render json: @comment, status: :bad_request
        end
      end

      def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
          render json: @comment, status: :accepted
        else
          render json: @comment, status: :bad_request
        end
      end

      def destroy
        @comment = Comment.find(params[:id])
        if @comment.destroy
          render json: @comment, status: :ok
        else
          render json: @comment, status: :bad_request
        end
      end

      def show
        @comment = Comment.find(params[:id])
      end

      private

      def comment_params
        params.permit(:name, :content, :post_id)
      end
    end
  end
end
