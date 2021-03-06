import * as React from "react";

// import { Link } from 'react-router-dom';
import error401 from "../../images/401.png";
import error404 from "../../images/404.png";
import error500 from "../../images/500.png";

class Exception extends React.Component<any, any> {
  public render() {
    const exception = [
      {
        errorCode: "404",
        errorImg: error404,
        errorDescription: "Sorry, the page you visited does not exist",
      },
      {
        errorCode: "401",
        errorImg: error401,
        errorDescription: "Sorry, you dont have access to this page",
      },
      {
        errorCode: "500",
        errorImg: error500,
        errorDescription: "Sorry, the server is reporting an error",
      },
    ];

    let params = new URLSearchParams(this.props.match.params.type);
    const type = params.get("type");
    let error = exception.find((x) => x.errorCode === type);

    if (error == null) {
      error = exception[0];
    }

    return (
      <div>
        <h1>EXCEPTION</h1>
      </div>
    );
  }
}

export default Exception;
