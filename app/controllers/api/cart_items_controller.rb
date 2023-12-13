class Api::CartItemsController < ApplicationController
  def index
    user = User.find_by(id: params[:user_id])
    @cart_items = user.cart_items
    if @cart_items
      render :index
    end
  end

  def create
    @cart_item = CartItem.find_by(product_id: params[:product_id], user_id: params[:user_id])
    if @cart_item
      new_qty = params[:quantity] + @cart_item.quantity
      @cart_item.update(quantity: new_qty)
      render :show
    else
      @cart_item = CartItem.new(cart_params)
      if @cart_item.save
        render :show
      else
        render json: @cart_item.errors, status: 422
      end
    end
  end

  def destroy
    @cart_item = CartItem.find_by(id: params[:id])
    if @cart_item.destroy
      head :no_content
    end
  end

  def checkout
    user = User.find_by(id: params[:user_id])
    @cart_items = user.cart_items
    if @cart_items.destroy_all
      head :no_content
    else
      render json: {errors: ["No items to checkout"]}, status: 401
    end
  end
  
  private
  def cart_params
    params.require(:cart_item).permit(:product_id, :user_id, :quantity)
  end
end
