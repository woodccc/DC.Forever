import $ from './axios.init'

export const loadWeightRecords = () => $.get('/weight')

export const addNewWeightRecord = weightRecord => $.post('/weight', weightRecord)

export const login = form => $.post('/login', form)

export const deleteWeightRecord = id => $.delete(`/weight/${id}`)

export const updateWeightRecord = (id, weightRecord) => $.put(`/weight/${id}`, weightRecord)
