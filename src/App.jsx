import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Feed } from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import Premium from "./components/Premium";
import Privacy from "./components/Privacy";
import TermsCondition from "./components/TermsCondition";
import RefundPolicy from "./components/RefundPolicy";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<TermsCondition />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
