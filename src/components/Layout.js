import React from "react";
import NavMenu from "./NavMenu";

function Layout(props) {
    return (
      <div>
        <NavMenu />
        <main>
          {props.children}
        </main>
      </div>
    );
}

export default Layout;