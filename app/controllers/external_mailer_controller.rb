class ExternalMailerController < ApplicationController
  def index
    render layout: true
  end

  def path
    content = params[:body]
    subject = params[:subject]
    address = params[:email]
    ExternalMailer.send_message_to_address(address, subject, content).deliver_now
    redirect_to "/"
  end
end
