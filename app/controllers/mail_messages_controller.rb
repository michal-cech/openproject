class MailMessagesController < ApplicationController
  def index
    @mail_messages = MailMessage.all
  end

  def belongs
    @mail_messages = MailMessage.where(work_package_id: params[:work_package_id])
    render 'index'
  end

  def show
    @mail_message = MailMessage.find(params[:id])
  end

  def new
    @mail_message = MailMessage.new
    @mail_message.work_package_id = params[:work_package_id]
  end

  # @return [Object]
  def create
    @mail_message = MailMessage.new(mail_params)
    @mail_message.work_package_id = params[:work_package_id]
    if @mail_message.save
      ExternalMailer.send_message_to_address(mail_params[:address_to], mail_params[:subject], mail_params[:content]).deliver_now
      redirect_to "/"
    else
      render 'new'
    end
  end

  private

  def mail_params
    params.require(:mail_message).permit(:subject, :content, :address_to, :work_package_id)
  end

end
