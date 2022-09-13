class PrivateController < ApplicationController
  before_action :authenticate_user!
  def test
    render json: {
      message: "This is a private message. you should only see if you've got a correct token"
    }
  end
end
