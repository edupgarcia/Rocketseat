# VS Code/Environment

- ZSH
- Oh My ZSH
- Fira Code

## Plugins

- Babel ES6/ES7
- Color Highlight
- Dracula Official
- EditorConfig for VS Code
- ES7 React/Redux/GraphQL/React-Native snippets
- GitLens - Git supercharged
- Prettier
- Rocketseat (ReactJS and React Native)
- vscode-icons

# Git

> ```
> git config --global user.email "edupgarcia.ti@gmail.com"
> git config --global user.name "Eduardo Pereira Garcia"
> git clone https://github.com/edupgarcia/Rocketseat.git
> ```

# Yarn

> ```
> yarn init -y
> yarn add express @types/express sequelize pg pg-hstore bcryptjs jsonwebtoken yup
> yarn add sucrase nodemon sequelize-cli eslint prettier
> yarn add eslint-config-prettier eslint-plugin-prettier -D
> yarn eslint --init
> yarn sequelize init
> ```

# Docker

https://docs.docker.com/install/linux/docker-ce/debian/

> ```
> sudo apt-get remove docker docker-engine docker.io containerd runc
> sudo apt-get update
> sudo apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common
> curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
> sudo apt-key fingerprint 0EBFCD88
> sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
> sudo apt-get update
> sudo apt-get install docker-ce docker-ce-cli containerd.io
> sudo usermod -aG docker $USER
> sudo groupadd docker
> sudo usermod -aG docker $USER
> logout ou newgrp docker
> docker run hello-world
> sudo systemctl enable docker
> echo manual | sudo tee /etc/init/docker.override
> # sudo systemctl start docker
> docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
> # database docker id 8d49d477768b95ed8077ec604da55b44b85c3fd6fc79c51d31482d0033ccd5ad
> docker start database
> docker stop database
> ```

# Postbird GUI

> ```
> Host: localhost
> Port: 5432
> Username: postgres
> Password: docker
> Database:
> Start Query:
> ```

# Sequelize

> ```
> yarn sequelize migration:create --name create-users
> yarn sequelize db:migrate
> yarn sequelize db:migrate:undo
> ```
