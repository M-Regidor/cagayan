class Api::ProductsController < ApplicationController
  def index
    if params[:category]
      @products = Product.where("LOWER(category) LIKE ?", "%#{params[:category].downcase}%")
    elsif params[:keyword]
      if params[:keyword] == "random"
        @products = Product.order("RANDOM()").limit(9)
      else
        keyword = params[:keyword].downcase
        @products = Product.where(
          "LOWER(name) ILIKE ? OR LOWER(description) ILIKE ? OR LOWER(category) ILIKE ?",
          "%#{keyword}%", "%#{keyword}%", "%#{keyword}%"
        )
      end
    else
      @products = Product.all
    end
    render :index
  end

  def show
    @product = Product.find_by(id: params[:id])

    if @product
      render :show
    else
      render json: {errors: ["Product not found"]}, status: 401
    end
  end
end
