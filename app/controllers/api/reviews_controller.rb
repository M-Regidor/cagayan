class Api::ReviewsController < ApplicationController
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
    if @review
      render :create
    else
      render json: @review.errors, status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:body, :rating, :user_id)
  end
end
