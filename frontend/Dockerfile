FROM node:18-alpine

WORKDIR /app

# Copy your static files
COPY index.html .
COPY config.js .

# Install serve globally
RUN npm install -g serve

# Use shell form to allow environment variable expansion
CMD serve -s . -l $PORT
