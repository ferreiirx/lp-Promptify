"use client";

import React, { useEffect } from 'react';

interface WistiaPlayerProps {
  mediaId: string;
  aspect?: number;
}

export const WistiaPlayer: React.FC<WistiaPlayerProps> = ({ mediaId, aspect = 0.5625 }) => {
  useEffect(() => {
    const wistiaPlayerScriptId = 'wistia-player-script';
    const wistiaEmbedScriptId = `wistia-embed-script-${mediaId}`;

    // Load Wistia Player API script
    if (!document.getElementById(wistiaPlayerScriptId)) {
      const playerScript = document.createElement('script');
      playerScript.id = wistiaPlayerScriptId;
      playerScript.src = 'https://fast.wistia.com/player.js';
      playerScript.async = true;
      document.body.appendChild(playerScript);
    }

    // Load the specific media embed script
    if (!document.getElementById(wistiaEmbedScriptId)) {
      const embedScript = document.createElement('script');
      embedScript.id = wistiaEmbedScriptId;
      embedScript.src = `https://fast.wistia.com/embed/${mediaId}.js`;
      embedScript.async = true;
      document.body.appendChild(embedScript);
    }

  }, [mediaId]);

  return (
    <>
      <style>{`
        wistia-player[media-id='${mediaId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: ${aspect * 100}%;
        }
      `}</style>
      <wistia-player media-id={mediaId} aspect={aspect.toString()}></wistia-player>
    </>
  );
};
