export const handleChange = (e, state, setState) => {
  const { name, value } = e.target
  setState({
    ...state,
    [name]: value
  })
}