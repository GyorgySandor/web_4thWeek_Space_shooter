from flask import Flask, render_template,redirect,url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/spaceshooter')
def spaceshooter():
    return render_template('game_spaceshooter.html')


@app.route('/matching-game')
def matching_game():
    return render_template('matching_game.html')

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True
    )