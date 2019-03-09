#image
FROM node:alpine

WORKDIR /usr/app 

#RUN
COPY ./package.json ./
RUN npm install
COPY ./ ./

#CMD
CMD ["npm", "start"]