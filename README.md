# AC/DC: AWS Cloud/DevOps Culture

## Requirements


1. Node.js and NPM [http://nodejs.org/](http://nodejs.org/)

2. Redis [http://redis.io/](http://redis.io/)

## Install

1. Clone the project

        $ git clone git@github.com:chaordic/act-acdc.git

2. Install dependencies

        $ cd act-acdc
        $ npm install

## Getting Started

1. Get Twitter API access

    See [https://dev.twitter.com/docs/auth/obtaining-access-tokens](https://dev.twitter.com/docs/auth/obtaining-access-tokens) and create tokens to access Twitter's API

2. Get Librato API access

    See [http://support.metrics.librato.com/knowledgebase/articles/22317-librato-api-tokens-and-token-roles](http://support.metrics.librato.com/knowledgebase/articles/22317-librato-api-tokens-and-token-roles) and create a token to access Librato's API

3. Create a file `config.json` with your third party credentials within the project's root directory

        {
            "twitter": {
                "consumer_key": "CONSUMER_KEY",
                "consumer_secret": "CONSUMER_SECRET",
                "access_token_key": "ACCESS_TOKEN_KEY",
                "access_token_secret": "ACCESS_TOKEN_SECRET"
            },
            "librato": {
                "email": "EMAIL",
                "token": "TOKEN"
            }
        }


## Running the project

    $ node act-acdc.js

You should see the following message on your console

    AC/DC is up and running!

Open [http://localhost:8080](http://localhost:8080)

You should see the content of [`#acdc`](https://twitter.com/search?q=%23acdc) term Twitter search
