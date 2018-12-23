This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is a simple functional kanban board. User can create new task, move it to some states/status (backlog, todo, doing, done) and delete it.
In the bottom of the page current time and current weather from OpenWeatherMap API are displayed.

## To install locally
You can download the code from the "Clone or download" button on this page or using terminal:
### `$ git clone https://github.com/mrfazry/kanban-board`

Unzip the file if you downloaded from the website or if you are using terminal, move to the root of the project:
### `$ cd kanban-board`

Then:
### `$ npm start`

The app will be launched automatically on your default browser at `localhost:3000`

## Dependencies
Additional dependencies are `redux/react-redux` for state management, `redux-persist` for persisting state, and `react-bootstrap4-modal` for creating modal/popup form.

The design is using Bootstrap 4. The CDN script is embedded on the html page.

_____________________________________

## Available Scripts

Additional scripts and information from `create-react-app`.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
