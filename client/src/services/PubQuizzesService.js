const baseURL = 'http://localhost:3000/api/pubQuizzes/'

export default {
  getQuizzes() {
    return fetch(baseURL)
      .then(res => res.json())
  }
}
