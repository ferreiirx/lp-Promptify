
'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    _wq: any[];
    Wistia: any;
  }
}

export function WistiaPlayer({ videoId }: { videoId: string }) {
  useEffect(() => {
    window._wq = window._wq || [];
    window._wq.push({
      id: '_all',
      onReady: function (video: any) {
        // You can add event listeners or other actions here
        // console.log("I got a handle to the video!", video);
      },
    });
  }, []);

  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <div
        className="wistia_responsive_padding"
        style={{ padding: '56.25% 0 0 0', position: 'relative' }}
      >
        <div
          className="wistia_responsive_wrapper"
          style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
        >
          <div
            className={`wistia_embed wistia_async_${videoId} videoFoam=true`}
            style={{ height: '100%', position: 'relative', width: '100%' }}
          >
            <div
              className="wistia_swatch"
              style={{
                height: '100%',
                left: 0,
                opacity: 0,
                overflow: 'hidden',
                position: 'absolute',
                top: 0,
                transition: 'opacity 200ms',
                width: '100%',
              }}
            >
              <img
                src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
                style={{
                  filter: 'blur(5px)',
                  height: '100%',
                  objectFit: 'contain',
                  width: '100%',
                }}
                alt=""
                aria-hidden="true"
                onLoad={e => e.currentTarget.parentElement!.style.opacity = '1'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
