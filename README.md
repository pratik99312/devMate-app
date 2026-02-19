# DevMate

- Create a Vite + React application
- Remove unnecessary code and create a Hello world app
- Install Tailwind CSS - "https://tailwindcss.com/docs/installation/framework-guides"
- Install Daisy UI - "https://daisyui.com/docs/colors/"
- Add NavBar component to App.jsx
- Create a NavBar.jsx seperate Component file
- Install react router Dom- link - "https://reactrouter.com/6.30.3/start/tutorial"
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlst in your body component
- Create a Footer
- Create a Login Page
- Install axios
- CORS - install cors in backened =>add middleware to with congigurations: origin, credentials:true
- Whenever you're making API call so pass {withCredentials:true}
- Install Redux Toolkit - Install react-redux - https://redux-toolkit.js.org/tutorials/quick-start
- configureStore => provider =>createSlice => add reducer to store
- Add Redux devtools in Chrome
- Login and see if yor date is coming properly in the store
- Navbar should update as soon as the user logs in
- Refractor our code to add constants file + create a components folder
- You should not be access other routes without login
- if Token is not present, redirect user to login Page
- Logout
- profile page
- Get the feed and add the feed in the store
- build the user card on feed
- Edit Profile feature
- show Toast Message on save of profile
- New Page - see all my connections
- New Page - see all my connection requests
- Feature - Accept/Reject Connection Request
- Send/ignore the user card from feed

Remaining:

- Signup New User
- E2ETesting

# Deployment

- Signup on AWS
- Launch instance
- chmod 400 <secret>.pem
- ssh -i "devmateseckey.pem" ubuntu@ec2-13-61-181-157.eu-north-1.compute.amazonaws.com
- install node version
- Git clone ""

## Frontend

- npm install -> dependencies install
- npm run build -> Important
- sudo apt update
- sudo apt install nginx
- sudo systemctl start nginx
- sudo systemctl enable nginx
- cpoy code from dist(build files) to /var/www/html/ -> cpoy code important
- sudo scp -r dist/\* /var/www/html/ ------> to copy file from dist to /var/www/html/
- Enable post :80 of your instance

## Backened

- updated DB password
- allowed ec2 instance public IP on mongo database
- installed npm install pm2 -g
- pm2 start npm --name "devmate-backened" -- start
- pm2 logs
- pm2 list, pm2 flush <name>,pm2 stop, pm2 delete <name>
- config nginx - /etc/nginx/sites-available/default
- restart nginx - sudo systemctl restart nginx
- Modify the BASEURL in frontend project to "/api"

Frontend = http://13.61.181.157/
Backened = http://13.61.181.157:7777/

Domain name = devmate.com => 13.61.181.157

frontend = devmate.com
backened = devmate.com:7777 => devmate.com/api

sudo nano /etc/nginx/sites-available/default

nginx config

server_name 13.61.181.157;

location /api/ {
proxy_pass http://localhost:7777/;
proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

# Adding a custom Domain name

- purchased domain name from godaddy
- signup on clodflare & add a new domain name
- change the nameservers on godaddy and point it to clodflare
- wait for sometime till the nameservers are getting updated --> 15 minutes
- DNS RECORD : A devmate.info 13.61.181.157
- ENABLE SSL for website

# Sending Emails via SES

- Create a IAM user
- Give Access to AmazonSES full Access
- Amazon SES: Create an Identity
- Verify your domain name
- Verify an email address - identity
- Install AWS SDK - V3
- Code Example https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples
- Setup SesClient
- Access Credentials should be created in IAm(AWS) under SecuityCredentials Tab
- Add the Credentials to the env file
- Write code for SESClient
- write code for sending email address
- Make the email dynamic by passing more params to the run function

Body
Navbar
Route=/ => Feed
Route=/login => Login
Route=/connections => Connections
Route=/profile => Profile

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
