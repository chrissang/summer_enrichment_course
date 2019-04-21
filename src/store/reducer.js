const initialState = {
  summerCourseData: {}
}

const reducer = (state = initialState, action) => {
	const mapActions = {
		'GET_COURSE_DATA': () => {return {...state, summerCourseData: action.value}}
	}
	if (mapActions[action.type])
		return mapActions[action.type]();
	else
		return state;
}

export default reducer;