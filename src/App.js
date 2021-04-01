import "./App.css";

import Form from "react-bootstrap/Form";

import React, { Component } from "react";
import marked from "marked";

let initialState = `
# Hello, World Im an H1,
## Im an h2
There's also [links](https://www.guaracha.ga)

Heres some inline code, \`<div></div>\`
\`\`\`



function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
![React Logo ](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/500px-React-icon.svg.png)

    
**bold**
- And of course there are lists.
- list item2
> block quotes

`;
marked.setOptions({
  breaks: true,
});

export default class App extends Component {
  state = {
    markdown: initialState,
  };

  updateMarkdown = function (markdown) {
    this.setState({ markdown });
  };

  render() {
    let { markdown } = this.state;
    console.log(markdown);
    return (
      <div>
        <div className="parent">
          <div className="left">
            <form>
              <h1>Editor</h1>
              <label>
                <textarea
                  cols="30"
                  rows="30"
                  id="editor"
                  placeholder={initialState}
                  value={markdown}
                  onChange={(event) => this.updateMarkdown(event.target.value)}
                />{" "}
              </label>
            </form>
          </div>
          <div className="right">
            <h1>Markdown Preview</h1>

            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <Form>
            <Form.Group controlId="formControlsTextarea">
              <Form.Label> Markdown input</Form.Label>
              <Form.Control
                componentClass="textarea"
                placeholder="enter text"
                value={markdown}
                onChange={(event) => this.updateMarkdown(event.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form> */
}
