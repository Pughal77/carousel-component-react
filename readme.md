# Step By Step Traversal Component

A simple React component that allows sequential traversal through a list of components.

## Example Usage

```jsx
import { StepByStepTraversal } from './StepByStepTraversal';
import { ComponentOne } from './components/ComponentOne';
import { ComponentTwo } from './components/ComponentTwo';
import { ComponentThree } from './components/ComponentThree';

const componentList = [
    ComponentOne,
    ComponentTwo,
    ComponentThree
];

function App() {
    return (
        <StepByStepTraversal components={componentList} />
    );
}
```

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/Pughal77/step-by-step-traversal-component.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the example app:
```bash
npx vite
```

## Important Notes

- Components passed to the `StepByStepTraversal` should be simple components without props
- Navigation controls are provided by pure-react-carousell library
- The component handles state management internally