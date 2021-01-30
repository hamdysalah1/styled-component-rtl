# styled-component-rtl

RTL helper method for styled component

# Using

```javascript
import { rtl, textAlign } from "./rtl.js";

const Language = styled.div`
  ${textAlign("right")}
  ${rtl("left", "20px")}
`;

<Language lang={props.lang}>العربيه</Language>;
```
