import os
from flask import Flask
from flask_mail import Mail, Message

app = Flask(__name__)


app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TSL'] = True
app.config['MAIL_USENAME'] = os.getenv('EMAIL')
app.config['MAIL_PASSWORD'] = os.getenv('EMAILPASS')

email = os.getenv('EMAILPASS')
email_pass = os.getenv('EMAIL')


mail = Mail(app)

@app.route("/")
def contact_email():
    msg = Message('Hello', sender='macharia3041@gmail.com', recipients=['macharia3041@gmail.com'])
    mail.send(msg)
    return 'message sent!'


if __name__ == '__main__':
    app.run(debug=True)
