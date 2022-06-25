import UserRegistrationPageLayout from '../templates/UserRegistrationPageLayout.js';
import UserRegistrationForm from '../UI/organisms/UserRegistrationForm.js';
import {signup} from '../../service/auth/SignupManager.js'
const UserRegistration = (props) => {
	function onSubmit(userInfo) {
		signup(userInfo)
			.then(res => {
				console.log("Response", res);
				console.log(res.jwt);
			})
				
	}
	return (
		<UserRegistrationPageLayout>
			<UserRegistrationForm onSubmit={onSubmit}/>
		</UserRegistrationPageLayout>
		);
}
export default UserRegistration;