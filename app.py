from flask import Flask, render_template
from datetime import datetime, timezone, timedelta

app = Flask(__name__)

HER_NAME = "Ришуля"
YOUR_NAME = "Гриша"

# 15.09.2026 00:00 по Москве
START_DATE = datetime(
    2026, 9, 15, 0, 0, 0,
    tzinfo=timezone(timedelta(hours=3))
)


@app.route("/")
def index():
    now = datetime.now(timezone(timedelta(hours=3)))

    if now >= START_DATE:
        mode = "together"
    else:
        mode = "waiting"

    return render_template(
        "index.html",
        her_name=HER_NAME,
        your_name=YOUR_NAME,
        mode=mode,
        start_date=START_DATE.isoformat(),
    )


if __name__ == "__main__":
    app.run(debug=True)