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
