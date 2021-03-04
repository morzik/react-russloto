import React from "react";

<% if (type === "class") { %>
export default class <%-ClassName%> extends React.Component {
  render() {
    return (
      <div className={"<%-class_name%>"}>
      </div>
    );
  }
}
<% } else { %>
const <%-ClassName%> = () => (
  <div className={"<%-class_name%>"}>
  </div>
);

export default <%-ClassName%>;
<% } %>
