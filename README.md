# Frontend Mentor - Designo agency website solution

This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge:

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Your Message` fields are empty should show "Can't be empty"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"
- **Bonus**: View actual locations on the locations page maps (we recommend [Leaflet JS](https://leafletjs.com/) for this)

### Preview:

![Design preview for the Designo agency website coding challenge](src/assets/images/preview.jpg)

### Links:

- [Solution URL](https://www.frontendmentor.io/solutions/designo-agency-angular17-qNslTxBH4x)
- [Live Site URL](https://designo-flame.vercel.app)

## My process

### Built with:

- Angular 17
- Angular routing
- Angular Reactive forms
- TypeScript
- Semantic HTML5 markup
- Scss
- Flexbox
- CSS Grid
- Leaflet JS
- Mobile-first workflow
- Bem (I am not 100% using it, it just offers some guidelines for me to follow)
- Webstorm

### What I learned:

- Using setTimeOut function:
```typescript
 setTimeout(() => {
  this.isLoading = false;
}, 3000);
```
- Using Leaflet library:
```typescript
  canadaOptions = {
  layers: [
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }),
  ],
  zoom: 13,
  center: latLng(43.71705, -79.25469),
  zoomControl: false,
};
```
- Using Reactive forms in angular:
```typescript
 contactForm = this.formBuilder.group({
  name: ['', [Validators.required]],
  email: ['', [Validators.required, Validators.email]],
  phone: ['', [Validators.required]],
  message: ['', [Validators.required]],
});
```
- There is a lot of things I came across in this project happy to see you exploring them.
### Useful resources:

- [google-webfonts-helper](https://gwfh.mranftl.com/fonts) - I used this to import the fonts locally
- [codepen](https://codepen.io/imathis/pen/ZYEWrw) - I used this pen for the loading spinner
- [stackoverflow](https://stackoverflow.com/questions/47716255/check-if-router-outlet-is-in-use) - has a good answer about knowing when an angular router outlet is active
- [stackoverflow](https://stackoverflow.com/questions/9182978/semi-transparent-color-layer-over-background-image) - has a good solution about adding Semi-transparent color layer over background-image
- [itecnote](https://itecnote.com/tecnote/r-angular-apply-style-to-element-depending-on-sibling-routerlinkactive/) - has a good answer about styling other elements if router is active
- [stackoverflow](https://stackoverflow.com/questions/65363248/warning-budgets-initial-exceeded-maximum-budget) - a fix for Warning: budgets: initial exceeded maximum budget in Angular
- I didn't use nav in the footer as W3C specification states:
  > Not all groups of links on a page need to be in a nav element — the element
  > is primarily intended for sections that consist of major navigation blocks.
  > In particular, it is common for footers to have a short list of links to various
  > pages of a site, such as the terms of service, the home page, and a copyright page.
  > The footer element alone is sufficient for such cases; while a nav element can be
  > used in such cases, it is usually unnecessary.
- [ngx-leaflet](https://github.com/bluehalo/ngx-leaflet) - Core Leaflet package for Angular
- [angular.dev](https://angular.dev/guide/forms/form-validation#validating-input-in-reactive-forms) - Validating form input
- [stackoverflow](https://stackoverflow.com/questions/52254683/angular-form-validation-how-to-show-error-message-on-submit) - how to show error message on submit

## Me:

- [LinkedIn](https://www.linkedin.com/in/amrabelgawad/)
- [Frontend Mentor](https://www.frontendmentor.io/profile/AmrAbdelgwaad)
