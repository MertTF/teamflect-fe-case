// https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/utils/create-use-external-events/create-use-external-events.ts
import { useIsomorphicEffect } from './useIsomorphicEffect';

function dispatchEvent(type, detail) {
  window.dispatchEvent(new CustomEvent(type, { detail }));
}

export function createUseExternalEvents(prefix) {
  function _useExternalEvents(events) {
    const handlers = Object.keys(events).reduce((acc, eventKey) => {
      acc[`${prefix}:${eventKey}`] = (event) =>
        events[eventKey](...event.detail);

      return acc;
    }, {});

    useIsomorphicEffect(() => {
      Object.keys(handlers).forEach((eventKey) => {
        window.removeEventListener(eventKey, handlers[eventKey]);
        window.addEventListener(eventKey, handlers[eventKey]);
      });

      return () =>
        Object.keys(handlers).forEach((eventKey) => {
          window.removeEventListener(eventKey, handlers[eventKey]);
        });
    }, [handlers]);
  }

  function createEvent(event) {
    return (...payload) => dispatchEvent(`${prefix}:${String(event)}`, payload);
  }

  return [_useExternalEvents, createEvent];
}
