"use client";

import Script from "next/script";

export default function MatchingWidget({ className }: { className?: string }) {
  return (
    <>
      <link href="https://doublethedonation.com/api/css/ddplugin.css" rel="stylesheet" />
      <div id="dd-container" className={className}></div>
      <Script src="https://doublethedonation.com/api/js/ddplugin.js" strategy="afterInteractive" />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
                        var DDCONF = {API_KEY: "j6pJpGe3St2JnJwO"};
                        var DTDTimer = window.setInterval(LoadDTD, 5);
                        function LoadDTD(){
                            if (window.doublethedonation){
                                doublethedonation.plugin.load_plugin();
                                window.clearInterval(DTDTimer);
                            }
                        }
                    `,
        }}
      />
    </>
  );
}
