FROM node:alpine

# Fix for create-react-app inside docker
ENV CI=true
ENV WDS_SOCKET_PORT=0

WORKDIR /app
COPY package.json .

RUN npm install
COPY ./ ./

CMD ["npm", "start"]

## Run the container with command
# docker run -p 3000:3000 <image_id>