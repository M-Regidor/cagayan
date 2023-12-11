class Api::ReviewsController < ApplicationController

  before_action :snake_case_params, :review_params
  
  def index
    product = Product.find_by(id: params[:product_id])
    @reviews = product.reviews
    if product
      render :index
    else
      render json: {errors: ["Product not found"]}, status: 401
    end
  end

  def create
    @review = Review.new(review_params)
    @review.product_id = params[:product_id]
    if @review.save
      render :create
    else
      render json: @review.errors, status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:title, :body, :rating, :author_id, :author_name)
  end
end
