from flask import Flask, request, jsonify
from flask_cors import CORS
from similarity import find_most_similar
from corpus import CORPUS
from dotenv import load_dotenv
import os

app = Flask(__name__)
# Enable CORS from backend server
cors = CORS(app, resources={r"/*": {"origins": "http://localhost:5000"}})
# Load environment variables from .env file
load_dotenv()


class Bot:

    def __init__(self):
        self.settings = {
            "min_score": 0.2,
        }

    def answer_question(self, text):
        answer = self.thank_responses(text)
        if not answer:
            answer = self.pre_built_responses(text)
            if not answer:
                answer = find_most_similar(text)
        return answer

    def pre_built_responses(self, text):
        pre_built = [
            {
                "Question": "What is your purpose?",
                "Answer": "I assist user experience by providing an interactive FAQ chat.\n",
            },
        ]
        for each_question in pre_built:
            if each_question["Question"].lower() in text.lower():
                return each_question
        return None

    def thank_responses(self, text):
        thank_variants = [
            "alright",
            "alright!",
            "ok",
            "ok!",
            "okay",
            "okay!",
            "okey",
            "okey!",
            "thank",
            "thank!",
            "thanks!",
            "thanks",
            "thanks!",
            "thank you",
            "thanks a lot",
            "thank you so much",
            "thank you very much",
            "thank you!",
            "thanks a lot!",
            "thank you so much!",
            "thank you very much!",
            "thanks heaps",
            "thanks a bunch",
            "thanks a ton",
            "many thanks",
            "much appreciated",
            "i appreciate it",
            "i am grateful",
            "i'm grateful",
            "thank you kindly",
            "thank you graciously",
            "thank you for your help",
            "thanks for your help",
            "i owe you one",
            "you're a lifesaver",
            "you're the best",
            "you're amazing",
            "you're awesome",
            "you're fantastic",
            "you're incredible",
            "you're a legend",
            "you're the greatest",
            "you're wonderful",
            "you're terrific",
            "you're outstanding",
            "you're phenomenal",
            "you're marvelous",
            "you're exceptional",
            "you're superb",
            "you're brilliant",
            "you're remarkable",
            "you're top-notch",
            "you're first-rate",
            "you're high-class",
            "you're world-class",
            "you're exceptional",
            "you're unique",
            "you're irreplaceable",
            "you're invaluable",
            "you're priceless",
            "you're a treasure",
            "you're a gem",
            "you're a rare find",
            "you're a godsend",
            "you're a hero",
            "you're an inspiration",
            "you're a difference-maker",
            "you're a superstar",
            "you're a genius",
        ]

        for variant in thank_variants:
            if variant in text.lower():
                return {"id": "9998"}
        return None


bot = Bot()


@app.route("/ask", methods=["POST"])
def ask_question():
    question_data = request.json
    question = question_data.get("question")
    secret_key = question_data.get("secretKey")

    # Check if the secret key matches
    expected_secret_key = os.getenv("SECRET_KEY")
    if secret_key != expected_secret_key:
        return jsonify({"error": "Unauthorized"}), 401

    if question:
        answer = bot.answer_question(question)
        return jsonify(answer)
    else:
        return jsonify({"error": "Question not provided"})


if __name__ == "__main__":
    port = 5001
    app.run(host="0.0.0.0", port=port)
