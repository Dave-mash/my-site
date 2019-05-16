import os
from flask import Flask
from flask_mail import Mail, Message

app = Flask(__name__)


app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USENAME'] = "apipsdayv@gmail.com"  # os.getenv('EMAIL')
app.config['MAIL_PASSWORD'] = "304130413041"  # os.getenv('EMAILPASS')


mail = Mail(app)


@app.route("/")
def contact_email():
    try:
        msg = Message("Send Mail Tutorial!", sender="apipsdayv@gmail.com", recipients=["macharia3041@email.com"])
        msg.body = "Yo!\nHave you heard the good word of Python???"
        mail.send(msg)
        return 'Mail sent!'
    except Exception as e:
        return(str(e))


if __name__ == '__main__':
    app.run(debug=True)
