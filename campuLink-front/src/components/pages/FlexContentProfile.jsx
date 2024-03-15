import Articles from "../ui/articles/Articles";
import MyInfo from "./myInfo/MyInfo";

function FlexContentProfile() {
    return ( 
        <div className="containerProfile">
            <MyInfo/>
            <Articles/>
        </div>
     );
}

export default FlexContentProfile;