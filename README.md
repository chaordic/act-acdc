# AC/DC: AWS Cloud/DevOps Culture

## Requirements


Node.js and NPM [http://nodejs.org/](http://nodejs.org/)

Redis [http://redis.io/](http://redis.io/)

## Install

Clone the project

    $ git clone git@github.com:chaordic/act-acdc.git

Install dependencies

    $ cd act-acdc
    $ npm install

## Getting Started

Get Twitter API access. Open [https://apps.twitter.com/app/new](https://apps.twitter.com/app/new) and sign in to create an app

Create a file `twitterAuth.json` with your credentials within the project's root directory

    {
        "consumer_key": "API_KEY",
        "consumer_secret": "SECRET_KEY",
        "access_token_key": "TOKEN_KEY",
        "access_token_secret": "TOKEN_SECRET"
    }

Run the project

    $ node index.js

You should see the following message on your console

    AC/DC is up and running!

Open [http://localhost:8080](http://localhost:8080)

You should see the content of [`#acdc`](https://twitter.com/search?q=%23acdc) term Twitter search
