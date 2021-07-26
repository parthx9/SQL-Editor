# SQL Editor

This project was created as a Test Task for Frontend Engineering Intern at Atlan

Hosted URL: [SQL Editor](https://sql-editor-atlan.web.app/)

## What did I use?

- React
- React Hooks
- Context API
- CodeMirror
- [Data](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv)

## Performance

<!-- ### Before Any Optimization
Used custom CSS to style the web application instead of Material UI or React-Bootstrap to reduce build size.

### Optimization Step 1
Here to improve performance I removed unused Dependencies from package.json. This resulted in increase of Lighthouse score by .


### Optimization Step 2
Next, I removed unused CSS with the help of PurgeCSS, increasing the performance by .

### Optimization Step 3 
To further increase performance I restructured code a bit to reuse components & also removed @import from CSS files to reduce blocking time. -->

- Used Custom CSS instead of Material UI or React-Bootstrap to reduce build size.
- Removed unused CSS with the help of PurgeCSS.
- Removed unused Dependencies from package.json.
- Used useMemo with useContext to prevent unnecassary re-renders.
- Restructured code a bit to reuse components & also removed @import from CSS files to reduce blocking time.

![Lighthouse Report](https://github.com/parthx9/SQL-Editor/blob/master/screenshot.png)
![web.dev Report](https://github.com/parthx9/SQL-Editor/blob/master/webdev.png)
![GTMetrix](https://github.com/parthx9/SQL-Editor/blob/master/gtmetrix.png)
