import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getEmployees() {
	try {
		const employees = yield axios.get("/employees");
		yield put({ type: "SET_EMPLOYEES", payload: employees.data });
		// console.log('employees.data (SAGA)', employees.data);
	} catch (error) {
		console.log(`error in Get Employees (SAGA) ${error}`);
		alert("Something went wrong");
	}
}

function* addEmployee(action) {
	try {
		// const employee = yield axios.post("/employees");
		yield axios.post("/employees", action.payload);

		console.log('action.payload (Add SAGA)', action.payload);
	} catch (error) {
		console.log(`error in Add Employee (SAGA) ${error}`);
		alert("Something went wrong");
	}
}
function* employeesSaga() {
	yield takeLatest("FETCH_EMPLOYEES", getEmployees);
	yield takeLatest("ADD_EMPLOYEE", addEmployee);
}
export default employeesSaga;
