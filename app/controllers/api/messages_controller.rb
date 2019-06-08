class Api::MessagesController < ApplicationController
  def index
    @messages = Message.where('id > ?', params[:id])# params[:message][:id]よりも大きいidがないかMessageから検索して、@messagesに代入する
  end
end