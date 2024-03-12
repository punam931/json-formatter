# Use an official Python runtime as a parent image
FROM python:3.9

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

ENV PATH "$PATH:/root/.local/bin"

# Install the dependencies specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Gunicorn will listen on this port
EXPOSE 5000

# Install Gunicorn
RUN pip install gunicorn

# Run the Gunicorn server
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]
