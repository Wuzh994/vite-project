const ResultEnum = {
  SUCCESS: 200,
  ERROR: 500,
}

export function resultSuccess(data, { message = 'ok' }) {
  return {
    code: ResultEnum.SUCCESS,
    data,
    message,
    type: 'success',
  }
}

export function resultError(
  { code = ResultEnum.ERROR, data = null },
  message = 'Request failed',
) {
  return {
    code,
    data,
    message,
    type: 'error',
  }
}
