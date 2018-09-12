import React from 'react';
import IdleTimer from 'react-idle-timer';

class IdleTimerWithoutUnmount extends IdleTimer {
  componentWillMount() {
    console.log('IdleTimerWithoutUnmount _will_ mount'); // eslint-disable-line no-console
    super.componentWillMount();
  }
  componentWillUnmount() {
    clearTimeout(this.tId);
    console.log('IdleTimerWithoutUnmount _would_ unmount, but will not'); // eslint-disable-line no-console
  }
}

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

  const timer = (<IdleTimerWithoutUnmount
    events={EVENTS}
    element={rootdocument}
    onActive={onActive}
    onIdle={onIdle}
    timeout={timeout}
    startOnMount
  />);
  return timer;
}

export default idleTimer;
