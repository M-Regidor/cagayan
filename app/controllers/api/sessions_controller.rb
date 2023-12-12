class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: :destroy
    before_action :require_logged_out, only: :create
    

    def show
      @user = current_user
      if @user
        render "api/users/info"
      else
        render json: { user: nil}
      end
    end

    def create
      email = params[:email]
      password = params[:password]
      @user = User.find_by_credentials(email, password)
      if @user
        login!(@user)
        render "api/users/info"
      else
        render json: { errors: "Invalid email or password"}, status: 401
      end
    end

    def destroy
      logout!
      head :no_content
    end
end
