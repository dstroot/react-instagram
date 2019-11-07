---
to: src/pages/<%= name %>/index.js
unless_exists: true
---
import React, { useEffect } from "react";
import "./styles.scss";

const <%= name %> = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `Pacific Life • <%= name %>`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <h1><%= name %>!</h1>
    </div>
  );
};

export default <%= name %>;
