import React from "react";

export default function Banner() {
  return (
    <div className="container px-lg-5">
      <div className="mt-5">
        <h1>A Warm Welcome</h1>
        <p>
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </p>
        <button className="btn btn-primary">Call to action!</button>
      </div>
    </div>
  );
}
