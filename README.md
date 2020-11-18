
Course Backend
This project is the node backend for the Course app, implemented with Express.

It also contains files for Deployment to AWS. It uses npm run bundle to create the deploy directory.

Prerequisites
Node v10
Windows: https://nodejs.org/en/download/

Ubuntu:

curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install -y nodejs
Setup
First, clone to repo to make a local copy of it.
git clone https://github.com/kalkedan/courseplan-backend.git
Move into the new directory
cd todo-backend
Update the database password in config.js.
Install dependencies
npm install
Build source code
npm run build
Run server
npm run start
The server will continue running in the current console window, so leave it open
