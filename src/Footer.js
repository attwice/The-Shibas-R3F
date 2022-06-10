import { useEffect, useState } from "react";

const Footer = () => {
  const [modal, showModal] = useState(false);

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      showModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <footer style={{ position: "fixed", bottom: 20, right: 20 }}>
      <button style={{ fontSize: 18 }} onClick={() => showModal(true)}>
        Credits
      </button>

      {modal && (
        <>
          <div
            className="modal"
            role="alert"
            onClick={() => showModal(false)}
          ></div>
          <div className="modal-content">
            <ul>
              <li>
                <a href="https://skfb.ly/6WxVW">Shiba</a> by{" "}
                <a href="https://sketchfab.com/dogerlo">zixisun02</a>
              </li>
              <li>
                <a href="https://sketchfab.com/3d-models/robo-shiba-b4215f3c452c4e7cbe845b56251d2877">
                  Robot Shiba Texture
                </a>{" "}
                by <a href="https://sketchfab.com/grigoriyarx">zixisun02</a>
              </li>
              <li>
                <a href="https://sketchfab.com/3d-models/baby-shiba-shiba-texturing-challenge-55e6dbd9bf41468986a6d9ae2cf0d21c">
                  Baby Shiba Texture
                </a>{" "}
                by <a href="https://sketchfab.com/Zacxophone">Zacxophone</a>
              </li>
              <li>
                <a href="https://sketchfab.com/3d-models/mars-mission-specialist-nugget-d65c0d7241fb4315ba15de17a84f8b36">
                  Astronaut Shiba Texture
                </a>{" "}
                by <a href="https://sketchfab.com/lulu9green">lulu9green</a>
              </li>
              <li>
                <a href="https://sketchfab.com/3d-models/hippie-shiba-5079178a8b1441808ae8a2186bbc76e7">
                  Hippie Shiba Texture
                </a>{" "}
                by{" "}
                <a href="https://sketchfab.com/KarolinaRenkiewicz">
                  KarolinaRenkiewicz
                </a>
              </li>

              <li>
                <a href="https://sketchfab.com/3d-models/pyjama-shiba-01919bcc61b94840a4e5982536c7137b">
                  Pyjama Shiba Texture
                </a>{" "}
                by <a href="https://sketchfab.com/Panki6">Panki6</a>
              </li>

              <li>
                All models and textures are licensed under Creative Commons
                Attribution
              </li>
            </ul>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
