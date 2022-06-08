import { Tool } from './interfaces';

const API_BASE = '/api';

const createErrorMessage = async (res: Response): Promise<string> => {
  let errorBody;
  try {
    errorBody = await res.json();
  } catch {
    console.error('Error body was not JSON.');
    errorBody = undefined;
  }
  return (
    'Error occurred! ' +
    `Status: ${res.status}${res.statusText !== '' ? ' ' + res.statusText : ''}` +
    (errorBody !== undefined ? '; Body: ' + JSON.stringify(errorBody) : '.')
  );
};

async function getTools (): Promise<Tool[]> {
  const url = `${API_BASE}/lti_tools/`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(res);
    throw new Error(await createErrorMessage(res));
  }
  const data: Tool[] = await res.json();
  return data;
}

export { getTools };
