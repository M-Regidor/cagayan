class Api::ReviewsController < ApplicationController

  before_action :snake_case_params

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
    @review.author_id = params[:author_id]
    # @reivew.author_name = params[:authorName]
    if @review.save
      render :show
    else
      render json: @review.errors, status: 422
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
      if @review.destroy
        head :no_content
      end
  end

  def show
    @review = Review.find_by(id: params[:id])
    if @review
      render :show
    else
      render json: {errors: ["Review not found"]}, status: 401
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors, status: :unprocessable_entity
    end

  end

  private
  def review_params
    params.require(:review).permit(:title, :body, :rating, :author_id, :author_name, :product_id)
  end
end
