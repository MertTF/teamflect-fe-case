import {
  KeyboardSensor as LibKeyboardSensor,
  MouseSensor as LibMouseSensor,
} from '@dnd-kit/core';

function shouldHandleEvent(element) {
  let cur = element;

  while (cur) {
    if (cur.dataset && cur.dataset.noDnd) {
      return false;
    }
    cur = cur.parentElement;
  }

  return true;
}

export class MouseSensor extends LibMouseSensor {
  static activators = [
    {
      eventName: 'onMouseDown',
      handler: ({ nativeEvent: event }) => {
        return shouldHandleEvent(event.target);
      },
    },
  ];
}

export class KeyboardSensor extends LibKeyboardSensor {
  static activators = [
    {
      eventName: 'onKeyDown',
      handler: ({ nativeEvent: event }) => {
        return shouldHandleEvent(event.target);
      },
    },
  ];
}
