import Layout from "../../shared/components/Layout";
import type { RootState } from '../../shared/store/';
import { useSelector, useDispatch } from 'react-redux'

function UserProfile(){
    const userProfile = useSelector((state: RootState) => state.userProfile);
    const dispatch = useDispatch();

    console.log(userProfile);
    return(
        <Layout>
         <div>UserProfile</div>
         <div>{userProfile.name}</div>
        </Layout>

    )
}

export default UserProfile;