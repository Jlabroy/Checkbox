# Checkbox

A simple React checkbox and label component.

## Getting started

### Prerequisites

* Install [git](https://git-scm.com/)
* Install [nodejs](https://nodejs.org/en/)

### Installation

* Checkout from github

```
$ git clone https://github.com/Jlabroy/Checkbox.git
```

* Install packages

```
$ npm install
```

### Developing

Built with

* [React](https://reactjs.org/docs/hello-world.html)
* [Jest](https://facebook.github.io/jest/)

### Tests

To run the tests run

```
$ npm run test
```

### Demo

To run a sample application using the checkbox run

```
$ npm start
```

### Usage

To use the Checkbox simply import it from the component directory:

```
import Checkbox from "./components/Checkbox";
...
render() {
    return (
        <div>
            My App
            <Checkbox />
        </div>
    );
}
```

#### Accepted Props

| prop       | type           | description                                                         |
| ---------- | -------------- | ------------------------------------------------------------------- |
| isChecked  | boolean        | Whether or not the checkbox is checked.                             |
| isDisabled | boolean        | Whether or not the checkbox is disabled.                            |
| onChange   | function       | Optional function called when the user changes the checkbox value\* |
| value      | string, number | The value of the checkbox.                                          |
| className  | string         | Optional class names passed to the checkbox                         |
| label      | string         | A text string label to go with the checkbox.                        |

\*nb. If you add an onchange function to the checkbox it becomes a controlled component and you must manage its state
yourself.
