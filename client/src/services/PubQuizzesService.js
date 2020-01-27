const baseURL = 'http://localhost:3000/api/pubQuizzes'

export default {
  getQuizzes() {
    return fetch(baseURL)
      .then(res => res.json())
  }

  getQuizzesByDay(day) {
    return fetch(`${baseURL}/day/${day}`)
      .then(res => res.json())
  }
}
