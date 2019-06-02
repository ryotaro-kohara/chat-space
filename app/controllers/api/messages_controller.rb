class Api::MessagesController < ApplicationController
  def index
    @messages = Message.Where("id > SELECT MAX(id)")
  end
end