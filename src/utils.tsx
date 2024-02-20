/**
 * Take in a JSX.Element and wait a while before returning it
 * @param  strData - JSX.Element to be returned
 * @param  milliseconds - How long to wait
 * @returns JSX.Element that was passed in
 */
export const slowMode = async (strData: JSX.Element, milliseconds = 1000) =>
{ await new Promise(resolve => setTimeout(resolve, milliseconds)); return strData; };
