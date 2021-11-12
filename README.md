# dgtek-portal-map-package

## :clipboard: Installation

```
yarn add dgtek-portal-map-package && mv node_modules/dgtek-portal-map-package/dist/map.worker.js public
```
or
```
npm install dgtek-portal-map-package && mv node_modules/dgtek-portal-map-package/dist/map.worker.js public
```

## :clipboard: How to use

### :page_with_curl: Configuring web-worker

You need to start web-worker.

Import the module `startWorker` from package:

```js
import { startWorker } from 'dgtek-portal-map-package/dist/start-worker'
```

and then start the worker:

```js
const worker = startWorker(publicPath, apiHost, apiAccessKey, credentials, role, callback)
```

* `publicPath` is the path worker will be started from (*`required`*)
* `apiHost` is the backend API url (for example `https://dgtek-staging.herokuapp.com`) (*`required`*)
* `apiAccessKey` is needed to access backend API (*`required`*)
* `credentials` user credentials (*`required`*)
* `role` - user role (*`optional`*)
* `callback` - your function that will receive the message when web-worker will be ready to work (*`optional`*)

### :page_with_curl: Methods

After the worker will be created you can use it's methods to access the data

Each method receive `callback` to return the result (your function )

```js
• refresh(callback)
• getBuildingsListForTable(status, callback) /* available status: lit, footprint, build, soon, other */
• getBuildingsList(status, callback) /* available status: lit, footprint, build, soon, other */
• getBuildingDetailsById(buildingId, callback) /* callback will receive building details */
• getBuildingDetailsByAddress(address, callback) /* callback will receive building details */
• createNewBuilding(data, callback) /* callback will receive the id of created building */
• deleteBuilding(buildingId, callback)
• patchBuildingDetails(buildingId, data, callback)
• putBuildingDetails(buildingId, data, callback)
```

#### ☕  Example

```js
const callback = data => console.log(data)

worker.getBuildingsList('lit', callback)
```

___________________________

### :memo: Package

#### Import package:

```js
import DgtekMap from 'dgtek-portal-map-package'
```

Create container for map with id "container-for-map" and stylize it as you need:

```html
<style>
  #container-for-map {
    position: relative;
    width: 70%;
    height: 70vh;
    margin: auto;
  }
  @media screen and (max-width: 600px) {
    #container-for-map {
      width: 100%;
    }
  }
</style>
<main>
  <figure id="container-for-map"></figure>
</main>
```

#### :clipboard: Get started

```js
const map = new DGtekMap({
  container,
  center: { lat: -37.8357725, lng: 144.9738764 }
})
```

#### :clipboard: Catch search event

To receive the result of user input you should set the property *`searchCallback`* of worker:

```js
worker.searchCallback = function (data) {
  console.log('SEARCH CALLBACK DATA:\n', data)
}
```
