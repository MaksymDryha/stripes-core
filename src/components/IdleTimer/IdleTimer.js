import React from 'react';
import IdleTimer from 'react-idle-timer';

function idleTimer(onActive, onIdle, timeout, rootdocument) {
  // List of events copied from
  // https://github.com/SupremeTechnopriest/react-idle-timer/blob/468b95ee86f1401c15ee0bb845cc08c2b731db69/src/index.js#L36-L47
  // and the unwanted 'mousemove' removed.
  // There seems to be no more elegant way to do this.
  const EVENTS = [
    // 'mousemove',
    'keydown',
    'wheel',
    'DOMMouseScroll',
    'mouseWheel',
    'mousedown',
    'touchstart',
    'touchmove',
    'MSPointerDown',
    'MSPointerMove'
  ];

  return (<IdleTimer
    events={EVENTS}
    element={rootdocument}
    onActive={onActive}
    onIdle={onIdle}
    timeout={timeout}
    startOnMount
  />);
}

export default idleTimer;
