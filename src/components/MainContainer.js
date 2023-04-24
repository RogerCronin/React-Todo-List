import Header from "./Header";
import InputBox from "./InputBox";
import List from "./List";
import Footer from "./Footer";

import "./MainContainer.scss";

export default function MainContainer() {
    return (
        <div className="MainContainer">
            <div>
                <Header/>
                <InputBox/>
                <List/>
                <Footer/>
            </div>
        </div>
    );
}