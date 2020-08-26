import React from "react"
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom"
import WelcomePage from "./pages/welcome/welcome"
import InfoNavBar from "./pages/info/navbar/navbar"
import AboutPage from "./pages/info/about/about"
import ProjectsListPage from "./pages/info/projects/list/projects"
import ResourcesPage from "./pages/info/resources/resources"

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/">
                    <WelcomePage/>
                </Route>
                <Route path="/info">
                    <InfoNavBar/>
                    <Switch>
                        <Route exact={true} path="/info/about">
                            <AboutPage/>
                        </Route>
                        {/*<Route path="/info/projects/:projectName">*/}
                        {/*    <ProjectPage/>*/}
                        {/*</Route>*/}
                        <Route exact={true} path="/info/projects">
                            <ProjectsListPage/>
                        </Route>
                        <Route exact={true} path="/info/resources">
                            <ResourcesPage/>
                        </Route>
                        <Route path="*">
                            <Redirect to="/info/about"/>
                        </Route>
                    </Switch>
                </Route>
                <Route path="*">
                    <Redirect to="/"/>
                </Route>
            </Switch>
        </Router>
    )
}
