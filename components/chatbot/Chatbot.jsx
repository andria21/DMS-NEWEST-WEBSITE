"use client";

import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      window.VG_CONFIG = {
        ID: "OYgcByf4kPKaensH8Mjk",
        region: 'eu',
        render: 'bottom-right',
        stylesheets: [
          "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
        ],
      }
    `;
    document.body.appendChild(script);

    const mainScript = document.createElement("script");
    mainScript.src =
      "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    mainScript.async = true;
    document.body.appendChild(mainScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(mainScript);
    };
  }, []);

  return <div id="VG_OVERLAY_CONTAINER" />;
}
// 4tcvfdywljvitdv0 dm-bot

// supta bot shm910vdzj56mily