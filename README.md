inspired by https://github.com/vishalpatel2890/recipeapp

https://www.npmjs.com/package/react-image
https://www.npmjs.com/package/react-image-overlay

[![Build Status](https://travis-ci.org/ChickenKyiv/recipe-antd.svg?branch=master)](https://travis-ci.org/ChickenKyiv/recipe-antd)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- [ ] stolen code works now
- [ ] connects to our fetch plugin
- [ ] connects to fake api
- [ ] conects to ck api - yeach fix this
- [ ] separated components
- [ ] separated and only HOC is connected to antd

- [ ] delete reqwest package


- [ ] create sep repo for storing recipe cards https://github.com/GroceriStar/cards-wrapper-component


Recipe-antD is a project where we trying to incorporate two major tasks:
1. show to a new users a collection of recipes that we have.
2. this project will be connected to our server for backend manipulations. At first time it'll be a Loopback REST API server, later it will be a graphQL server, but for quickier turn around we connect it with our groceristar-fetch plugin.
3. Another goal of this project is to make Groceristar/showcase project less complicated and overwhelmed with components.
Codebase from this project we'll use later at showcase in order to make it better.


<!--
[![Build Status](https://travis-ci.org/GroceriStar/showcase.svg?branch=master)](https://travis-ci.org/GroceriStar/showcase)
-->


Major goals for recipe-antd are
* start a big migration of our projects from `fetch` plugin into connection with API servers
* totally utilize major AntD components and make them work separately, but as part of this project.
* publish on Netlify and present it as part of our RAPI server for ProductHunt community
* show users what data we have - at preview mode

Stretch goals:
- [ ] install and connect Raven at index.js
- [ ] adjust logic of envconfig and try to connect to our local/shared servers
- [ ] make first axios calls and be happy to receive json results
- [ ] connect to our simple [fake-api](https://github.com/GroceriStar/fake-api) that i've created...

---
