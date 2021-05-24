<h1 align="center">
  <br>
  <img width="100" src="https://github.com/masvelio/masvelio/blob/8d76a50fe3b37ddafe435a25f8a2e66b0d0b80cb/devbook/laptop.png?raw=true"/>
  <br>
  Devbook
  <br>
</h1>

<h4 align="center">The coolest programmers' place on the Internet</h4>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#how-to-develop">How To Develop</a> •
  <a href="#gallery">Gallery</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://github.com/masvelio/masvelio/blob/db0bb9b90ab52a1e98bb1ed7b111f81613dcbed7/devbook/signin.png?raw=true)

## Overview

Devbook is a fun project crafted "during the weekend". Its main goal is to play around with cool frontend technologies.
The app mimics a social networking site for programmers that allows you to log in, create and edit a developer profile,
view a list of all profiles, and view the details of each developer.

## Tech stack

- React - UI Library
- Chakra UI - components library
- Apollo - GraphQL client
- Hasura - GraphQL API engine
- PostgreSQL - database handled by Hasura
- Auth0 - authentication & authorization platform
- Vercel - deployment platform

## How to use

* App is available at [devbook-sepia.vercel.app](https://devbook-sepia.vercel.app/).
* Sign in button redirects to Auth0 login page. It is possible to login with Google account or email/password method.
  It is recommended, however, to use Signup button and create account with [disponsable email](https://temp-mail.org/pl/10minutemail).
* It is possible to create a profile on `My profile` page once all necessary fields are filled out.
* When the profile has been already created, it is possible to edit existing profile with the same form.

### ⚠️ Disclaimer ⚠️

```
This is not production grade app. There are known issues here and there. 
For example Auth0 signin works only on Desktop, Chrome, without Incognito mode.
```

## How to develop

```bash
# Clone this repository
$ git clone https://github.com/masvelio/Devbook.git

# Go into the repository
$ cd Devbook

# Install dependencies
$ yarn

# Run the app on port 3000
$ yarn start

# Run the tests
$ yarn test
```

## Gallery

Form designed to create and edit developer profile
![screenshot](https://github.com/masvelio/masvelio/blob/8d76a50fe3b37ddafe435a25f8a2e66b0d0b80cb/devbook/profile.png?raw=true)
Developer's profile details
![screenshot](https://github.com/masvelio/masvelio/blob/8d76a50fe3b37ddafe435a25f8a2e66b0d0b80cb/devbook/details.png?raw=true)
List of developer profiles
![screenshot](https://github.com/masvelio/masvelio/blob/8d76a50fe3b37ddafe435a25f8a2e66b0d0b80cb/devbook/profiles-list.png?raw=true)

## License

MIT
