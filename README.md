# BonVue :bus:

## Motivation

- When I first moved to IC, I had no car and depended on the bus system to get to work, downtown, etc.
- A big part of my first few weeks was spent trying to figure out what buses to take to get to where I wanted to go.
- This is where I got pretty frustrated with the `bongo.org` service and decided to replicate it with some improvements.

---

## Improvements

- The most notorious of the improvements is **render speed on selecting multiple bus routes**.
- The current service freezes when the user selects more than 3?4? (haven't figured out) routes at the same time. (See below)

> BonVue (Fast :+1:)
> ![bonvue](/bonvue.gif)

> Original (Slow :-1:)
> ![bongooriginal](/bongooriginal.gif)

---

## Tools

- AWS Lambda
- AWS API Gateway
- Vue.js
- Python
  - To massage data and feed into AWS API Gateway.

## Future Add-ons: :rocket:

- Route scheduling.
- Notification service.
- Favorite routes.
- Any Graph theory algorithm visualization.
- Djikstra, Bellman-Ford, BFS, DFS, A-star, Best-First Search...

## Project setup and Usage

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests (what tests?)

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

## Contributing :thought_baloon:

1. :spaghetti: Fork this repo!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :+1:
