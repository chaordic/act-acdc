# AC/DC: AWS Cloud/DevOps Culture

## Requirements


1. Virtual Box [https://www.virtualbox.org/](https://www.virtualbox.org/)

2. Vagrant [http://www.vagrantup.com/](http://www.vagrantup.com/)

3. Ansible [http://www.ansible.com/](http://www.ansible.com/)

## Getting Started

1. Clone the project

        $ git clone git@github.com:chaordic/act-acdc.git
        $ cd act-acdc
        $ cp config.json.sample config.json

2. Get Twitter API access

    See [https://dev.twitter.com/docs/auth/obtaining-access-tokens](https://dev.twitter.com/docs/auth/obtaining-access-tokens) and create tokens to access Twitter's API

3. Get Librato API access

    See [http://support.metrics.librato.com/knowledgebase/articles/22317-librato-api-tokens-and-token-roles](http://support.metrics.librato.com/knowledgebase/articles/22317-librato-api-tokens-and-token-roles) and create a token to access Librato's API

4. Fill in `config.json` with your third party credentials

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

    $ cd ops
    $ vagrant up

Open [http://localhost:8080](http://localhost:8080)

You should see the content of [`#acdc`](https://twitter.com/search?q=%23acdc) term Twitter search
