# Use the official Ruby image as the base image
FROM ruby:3.1.1

# Set the working directory in the container
WORKDIR /app

# Copy the Gemfile and Gemfile.lock from your local project to the container
COPY Gemfile Gemfile.lock ./

# Install dependencies using Bundler
RUN gem install bundler && \
    bundle install --jobs 4 --retry 3

# Copy the rest of your Rails application code to the container
COPY app /app/app
COPY bin /app/bin
COPY config /app/config
COPY db /app/db
COPY lib /app/lib 
COPY log /app/log 
COPY config.ru /app/config.ru 
COPY node_modules /app/node_modules
COPY storage /app/storage 
COPY tmp /app/tmp
COPY vendor /app/vendor
COPY .ruby-version /app/.ruby-version 
COPY Rakefile /app/Rakefile
COPY public /app/public


# COPY package.json ./
# RUN npm install 
#THIS IS JUST FOR THE REACT CALENDAR SINCE IT'S BUILT IN THE BACKEND... maybe I don't need it if I copy the node modules instead???

# # Run database setup and migrations
## you can't do this yet because the db hasn't been created 
# RUN rails db:create && rails db:migrate

# Expose a port for your Rails application to run on. Note that it's 3001 because that's what we specified in our puma.rb file
EXPOSE 3001

# Set environment variables if needed, such as database credentials
# ENV DATABASE_URL=postgres://user:password@db_host/db_name

# Start your Rails application
# CMD ["rails", "server", "-b", "0.0.0.0"]
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3001"] 
#done so it can listen on port 3001 as decribed in the Puma file and as exposed above
