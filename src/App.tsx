import * as React from "react";
import * as RouterDom from "react-router-dom";

import Loading from "./Components/Common/Loading";

const Account = React.lazy(() => import("./Pages/Account"));
const Address = React.lazy(() => import("./Pages/Address"));
const Notification = React.lazy(() => import("./Pages/Notification"));
const Paymethod = React.lazy(() => import("./Pages/Paymethod"));
const Profile = React.lazy(() => import("./Pages/Profile"));
const Error404 = React.lazy(() => import("./Pages/Error404"));


const App = () => {
    return (
        <>
            <React.Suspense fallback={<Loading/>}>
                <RouterDom.BrowserRouter>
                    <RouterDom.Switch>
                        <RouterDom.Route exact path={"/"} component={Account}/>
                        <RouterDom.Route exact path={"/account"} component={Account}/>
                        <RouterDom.Route exact path={"/address"} component={Address}/>
                        <RouterDom.Route exact path={"/notification"} component={Notification}/>
                        <RouterDom.Route exact path={"/paymethod"} component={Paymethod}/>
                        <RouterDom.Route exact path={"/profile"} component={Profile}/>
                        <RouterDom.Route path="*">
                            <Error404/>
                        </RouterDom.Route>
                    </RouterDom.Switch>
                </RouterDom.BrowserRouter>
            </React.Suspense>
        </>
    );
};

export default App;