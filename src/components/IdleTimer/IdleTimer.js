import React from 'react';
import IdleTimer from 'react-idle-timer';

function idleTimer(onActive, onIdle, timeout, rootdocument) {
  return (<IdleTimer
    element={rootdocument}
    onActive={onActive}
    onIdle={onIdle}
    timeout={timeout}
    startOnMount
  />);
}

export default idleTimer;
