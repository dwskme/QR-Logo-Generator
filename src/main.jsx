import React from "react";
import ReactDOM from "react-dom";
import { QRCode } from "react-qrcode-logo";

function App() {
  return (
    <div className="App">
      {/* <QRCode value="https://github.com/gcoro/react-qrcode-logo" 
    eyeRadius={[
      { // top/left eye
        outer: [0, 30, 0, 30],
        inner: [0, 0, 0, 00],
      },
      [10, 10, 10, 0], // top/right eye
      [10, 0, 10, 10], // bottom/left
    ]}
      /> */}
      <QRCode
        value="https://asparksys.com/?empId=ASP-JT001"
        eyeRadius={[
          // build eyeRadius manually
          {
            outer: [0, 30, 0, 30],
            inner: [0, 0, 0, 0],
          },
          {
            outer: [30, 0, 30, 0],
            inner: [0, 0, 0, 0],
          },
          {
            outer: [30, 0, 30, 0],
            inner: [0, 0, 0, 0],
          },
        ]}
        removeQrCodeBehindLogo={true}
        ecLevel={"H"}
        logoWidth={120}
        logoHeight={40}
        logoOpacity={1}
        logoImage={"../img/logo-black.png"}
        qrStyle={"dots"}
        size={500}
        quietZone={50}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
