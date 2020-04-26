# Suppliera

## Installation

You will be needing two things: Docker and Docker-Compose
These are the following instructions(if you use Linux!):

First Docker:
```bash
sudo apt-get update

sudo apt-get install apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"

sudo apt-get update

sudo apt-cache policy docker-ce

sudo apt-get install docker-ce
```

There is an optional step if you do not want to use the sudo command when you run Docker.
I am too lazy to write it so tough shit.

Lastly Docker-Compose:
```bash
sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version
```

To build the project just type:

```bash
docker-compose build
```

And lastly:

```bash
docker-compose up
```