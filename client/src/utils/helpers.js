export const handleChange = (e, helpers) => {
  const { name, value } = e.target
  let [ state, setState ] = [...helpers]
  setState({
    ...state,
    [name]: value
  })
}