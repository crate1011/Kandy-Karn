
import { EmployeeViews } from "./EmployeeView"
import { CustomerViews } from "./CustomerView"

export const ApplicationViews = () => {
	const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)
	
	if (kandyUserObject.staff) {
		return <EmployeeViews />
	}
	else {
		return <CustomerViews />
	}
}
