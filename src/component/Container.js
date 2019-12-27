import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

function Container() {
  return (
    <Wrapper>
        <Switch>
          <Route exact path="/" component={() => <div>homepage</div>} />
          <Route path="/first" component={() => <div>first</div>} />
          <Route path="/second" component={() => <div>second</div>} />
          <Route path="/third" component={() => <div>third</div>} />
        </Switch>
    </Wrapper>
  );
}

const Wrapper = styled.div`
`;

export default Container;