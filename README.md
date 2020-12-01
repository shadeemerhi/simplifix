# SimpliFix

Simplifix is an intermediary app where users can find and hire freelance contractors for labor-based work by browsing through posted 'gigs' as well as post their own gigs to gain clients if they possess skills in a particular area. Categories of work include, but are not limited to, plumbing, electrical, landscaping, hardwood flooring, and interior design. The platform manages all bookings and payments, and allows for live messaging between clients and contractors.

This repo is the front-end of Simplifix, which was built using React and Material UI.
The back-end repo can be found [here](https://github.com/shadeemerhi/simplifix-api) and was built using Node.js and Express in combination with PostgreSQL.

The front-end has been deployed to Netlify and the live site can be found [here](https://mystifying-albattani-f243f1.netlify.app/). The back-end is being hosted by Heroku.

## Final Product

### Home page

### Gigs page

### Individual Gig details

### Live messaging

### Booking a contractor

### Booking confirmation

### Payments with Stripe

### Creating a gig

### Creating a profile

###

!["Home page"](https://github.com/shadeemerhi/simplifix/blob/master/docs/home-page.png?raw=true)
!["Gig details page"](https://github.com/shadeemerhi/simplifix/blob/master/docs/gig-details.png?raw=true)
!["Messaging page"](https://github.com/shadeemerhi/simplifix/blob/master/docs/messages.png?raw=true)
!["Bookings page"](https://github.com/shadeemerhi/simplifix/blob/master/docs/bookings.png?raw=true)

## Dependencies

- React.js
- Node.js
- Express
- cookie-session
- Socket.io
- Material-UI

## Stripe cards

Payment succeeds: 4242 4242 4242 4242

Payment requires authentication: 4000 0025 0000 3155

Payment is declined: 4000 0000 0000 9995

## Cypress testing

command: ./node_modules/.bin/cypress open

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
