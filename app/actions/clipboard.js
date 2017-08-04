// @flow
export const COPY_TO_CLIPBOARD = 'COPY_TO_CLIPBOARD';

export function copy() {
  return {
    type: COPY_TO_CLIPBOARD
  };
}
