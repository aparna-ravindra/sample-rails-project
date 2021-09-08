# app/controllers/api/v1/posts_controller.rb
class Api::V1::PostsController < ApplicationController
  def index
    all_posts = Student.all
    render json: all_posts
  end

  def create
    post = Student.create(post_params)
    render json: post
  end

  def show
    post = Student.find_by(id: params[:id])
    render json: post
  end

  def sort
    all_posts =  Student.order(params[:id])
    render json: all_posts
  end

  def update
    post = Student.find(params["id"])
    post.update(post_params)
    render json: post
  end
  
  def destroy
    Student.destroy(params[:id])
    head :ok
  end

  private

  def post_params
    params.permit(:fullname, :description)
  end
end


