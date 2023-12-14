class Api::ProductsController < ApplicationController
  def index
    if params[:category]
      @products = Product.where("LOWER(category) LIKE ?", "%#{params[:category].downcase}%")
    elsif params[:keyword]
      @products = Product.where(
        "LOWER(name) LIKE ? OR LOWER(description) LIKE ? OR LOWER(category) LIKE ?",
        "%#{params[:keyword].downcase}%",
        "%#{params[:keyword].downcase}%",
        "%#{params[:keyword].downcase}%"
      )
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
