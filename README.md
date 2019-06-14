This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project have 4 main directories under src:
  --  components: where all components such as BingMap placed in.
  --  containers: Containers (pages) placed in here.
  --  Models: Models for props and state placed in here.
  --  Service: GeoLocationApi which provide user location, and BingMapLoader which is a static class and load necassary script for bing map placed in here.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## جواب سوالات

در صورت عوض کردن GeocodeAPI تنها نیاز به تغییر سرویس مربوط به دریافت مکان کاربر در فایل  geoLoactionApi است. و باقی کامپاننت  و سرویسی نیازی به تغییر ندارن.

نقشه گوگل به دلیل نیاز حساب billing قابل استفاده نبود.
در صورت نیاز به تغییر نقشه کافیست متودهای مربوط به لود اسکریپت، افزودن/حذف مارکر (maker)، نحوه دسترسی به اطلاعت آدرس  کاربر متناسب با نقشه جدید تغییر پیدا کنند.
به نظر بنده برای تغییر geocodeApi حداکثر 1 ساعت و برای تغییر نقشه با توجه به امکانات نقشه جدید بین 1 تا 2 ساعت زمان نیاز است.