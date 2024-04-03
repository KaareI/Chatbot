# V2
import re, math
from collections import Counter
from corpus import CORPUS

WORD = re.compile(r'\w+')

def get_cosine(vec1, vec2):
    intersection = set(vec1.keys()) & set(vec2.keys())
    numerator = sum([vec1[x] * vec2[x] for x in intersection])

    sum1 = sum([vec1[x]**2 for x in vec1.keys()])
    sum2 = sum([vec2[x]**2 for x in vec2.keys()])
    denominator = math.sqrt(sum1) * math.sqrt(sum2)

    if not denominator:
        return 0.0
    else:
        return float(numerator) / denominator

def text_to_vector(text):
    words = WORD.findall(text)
    return Counter(words)

def compare_similarity(word_one, word_two):
    vector1 = text_to_vector(word_one.lower())
    vector2 = text_to_vector(word_two.lower())

    return get_cosine(vector1, vector2)

def find_most_similar(word, top_n=3, min_score=0.2):
    """Finds the top_n most similar objects based on cosine similarity."""
    similarities = []
    for each in CORPUS:
        score = compare_similarity(word, each['Question'])
        if score >= min_score:  # Only consider objects with scores above the threshold
            similarities.append((score, each))
        else:
            # Create a default object with all keys, explicitly setting 'answer' and 'question' to None
            similarities.append((score, {"id": "9999", "answer": None, "question": None}))

    # Sort by score in descending order and take the top_n
    similarities.sort(key=lambda x: x[0], reverse=True)
    top_matches = similarities[:top_n]

    # Extract and return the top matches
    return [{"score": score, "id": obj.get('id', '9999'), "answer": obj.get('Answer'), "question": obj.get('Question')}
            for score, obj in top_matches]