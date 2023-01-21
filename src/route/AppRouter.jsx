import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Sections from '../structure/Sections';
import Login from '../components/Login'
import Register from '../components/Register';
import ContactForm from '../components/ContactForm';
import AboutUs from '../pages/AboutUs';
import OutdoorActiviities from '../pages/OutdoorActiviities';
import ActivitiesSlider from '../pages/ActivitiesSlider';
import ProtectedRoute from './ProtectedRoute';



const AppRouter = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/home" component={Sections} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registrar" component={Register}/>
            <Route exact path="/contacto" component={ContactForm}/>
            <Route exact path="/aboutus" component={AboutUs}/>
            <Route exact path="/activities" component={ActivitiesSlider}/>
            <Route exact path="/outdooractivities" component={OutdoorActiviities} />
            <ProtectedRoute exact path="/protegido" logged={false}/>
        </Switch>
    </Router>
  )
}

export default AppRouter;

//Sections Esta HOMEPAGE o Pagina Principal