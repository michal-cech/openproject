class ExternalMailer < BaseMailer

  def send_message_to_address(address, subject, content)
    @body = content
    mail(to: address, subject: subject)
  end
end