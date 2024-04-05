# Use the official Node.js runtime as the base image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /front

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

# SSL 인증서 및 키 파일을 복사합니다.
#COPY your_domain.crt /etc/nginx/ssl/your_domain.crt
#COPY your_domain.key /etc/nginx/ssl/your_domain.key

# Nginx 설정 파일을 복사합니다.
COPY nginx.conf /etc/nginx/nginx.conf

## Nginx 서버 실행 시 SSL 인증서와 키 파일을 적용합니다.
#RUN sed -i '/^http {/a \    server_tokens off;\n    include /etc/nginx/sites-enabled/*;' /etc/nginx/nginx.conf
#RUN sed -i '/^http {/a \    ssl_certificate /etc/nginx/ssl/your_domain.crt;\n    ssl_certificate_key /etc/nginx/ssl/your_domain.key;' /etc/nginx/nginx.conf

# Copy the built React app to Nginx's web server directory
COPY --from=build /front/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]