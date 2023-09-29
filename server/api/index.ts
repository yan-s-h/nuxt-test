export default defineEventHandler(event => {
  setResponseStatus(event, 200)
  return {
    success: true,
    message: '',
    result: 'hi'
  }
})