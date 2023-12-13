class Api::CartItemsController < ApplicationController
  def index
    user = User.find_by(id: params[:user_id])
    @cart_items = user.cart_items
    if @cart_items
      render :index
    end
  end

  def create
    @cart_item = CartItem.new(cart_params)
    if @cart_item.save
      render :show
    else
      render json: @cart_item.errors, status: 422
    end
  end

  def destroy
    @cart_item = CartItem.find_by(id: params[:id])
    if @cart_item.destroy
      head :no_content
    end
  end

  private
  def cart_params
    params.require(:cart_item).permit(:product_id, :user_id, :quantity)
  end
end
