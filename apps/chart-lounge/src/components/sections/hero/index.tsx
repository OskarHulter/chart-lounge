import React from 'react';
const today = Temporal.Now.zonedDateTimeISO().toString();

export function Hero({ children }: { children: React.ReactNode }) {
  console.log('Today is:', today);
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span>Hello there,</span> Welcome chart-lounge 👋
            </h1>
          </div>
          <div id="hero" className="rounded">
            <div className="text-container">today is today</div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
