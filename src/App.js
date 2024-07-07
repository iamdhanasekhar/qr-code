import { useState } from "react";
import "./App.css";
import QRCode from "qrcode";
function App() {
  // const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  function generateQRcode(url) {
    console.log(url);
    QRCode.toDataURL(url, (err, url) => {
      // if (err) {

      // }
      setQrCode(url);
    });
  }
  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      {qrCode !== "" ? <img src={qrCode} alt="qr-code" /> : ""}
      <Generator handleGenerate={generateQRcode} />
      <a href={qrCode} download="qrcode.png">
        Download
      </a>
    </div>
  );
}
function Generator({ handleGenerate }) {
  const [url, setUrl] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGenerate(url);
        }}
      >
        <input
          type="text"
          value={url}
          placeholder="e.g. https://google.com"
          onChange={(ev) => setUrl(ev.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
    </>
  );
}
export default App;
