# README
* System dependencies
    * Rails version: `rails 7.1.2`
    * Ruby version: `ruby 3.2.2`

## Getting Started
### Demos!
Please find the demo folder at the top-level of this repository for a quick run down of how everything works.

## Install Pre-requisites
```shell
bundle install
bundle exec rails db:drop db:create db:migrate db:seed --trace
nvm install 16 && nvm use 16
yarn
```

## Run Application
1. Start assets server
`./bin/shakapacker-dev-server`

2. Run Rails server
`bundle exec rails s -p 3000`

## Test Data
Email: john.doe@example.com
Password: 123456

## Running Tests
### RSpec
`bundle exec rspec`

### Cypress
#### Run in Headless Mode
`yarn run cypress run`

#### Run in Browser
`yarn run cypress open`

## Quality
### Running Rubocop
`bundle exec rubocop`

# Improvements
- Fix CSRF Token request mechanism for React and Rails
- Remove `skip_before_action :verify_authenticity_token` and ensure that tokens are been checked
- Add controller spec for Dashboard since it's a critical point for rendering the main React component(<App/>)
- Create json object responses with Representation classes
- Fix authentication flow mechanism as token expiry causes issues
- use Contexts for handling shared data
- etc.
