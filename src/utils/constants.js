const API_KEY = 'a8112c47a3d44e099c09263179891048'

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
const today = year + '-' + month + '-' + day;

export {API_KEY, today}