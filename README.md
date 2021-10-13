# My personal portfolio website
[LIVE](https://haxikowy.github.io)
[CODE](https://github.com/haxikowy/portfolio)

## Process
Packages: 
  - [emailJS](https://www.emailjs.com/) - send contact mail without any backend,
  - [react-icons](https://react-icons.github.io/react-icons/) - great library to get icons You want,
  - [react-spring](https://react-spring.io/) - great physics based animation library,
  - [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) - to get nice pseudocode formatting(I've done some custom styling for just my use case),
  - [SASS](https://sass-lang.com/) - I like sass over css.
Project is build in React, I've used Router with hashHistory and created some custom hooks to make code more readable. I've reused Loader from my last project. In future I will try to add blog. Probably will build headless cms to make it work nice. 😊

### What I've learned
I've had a few of problems. One was with
```css
.Header{
  position:sticky;
  top: 0;
}
```
case is that, if You will make `overflow: hidden` on parent element whole sticky feature is broken. So I had to wrap content that I wanted to have `overflow: hidden` property with another wrapper and give that wrapper this property. 

I learned a lot about react-spring, that's my first use of this package. At first it was annoying, but after researching I realized how to use it. I think I will use it in some future projects, it's not really hard to use, but u have to understand some cores of this package.

Another first use for me is react-syntax-highlighter, I think it's a bit of overkill for my use case, but maybe in future, as I will create my blog it will help with syntax highlighting there.😃