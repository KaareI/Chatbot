# Base Image
FROM python:3.12.0

# Copy requirements.txt
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Copy project files
COPY . /backend/python

# Expose port
EXPOSE 5001

# Run the application
CMD ["python", "main.py"]