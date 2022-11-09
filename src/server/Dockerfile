# syntax=docker/dockerfile:1

FROM python:3.9-alpine
WORKDIR /server

RUN apk add --no-cache gcc g++ musl-dev linux-headers

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

ENV FLASK_APP=__init__.py
ENV FLASK_ENV=development

ENV PYTHONUNBUFFERED=1

EXPOSE 5000
COPY . .
CMD ["flask", "run", "--host", "0.0.0.0"]
