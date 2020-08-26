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
import ResourcesPage from "./pages/info/resources/ResourcesPage"
import ProjectsAZPage from "./pages/info/projects/az/ProjectsAZPage"
import RecommendProjectsPage from "./pages/info/projects/recommend/RecommendProjectsPage"

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/">
                    <WelcomePage/>
                </Route>
                <Route path="/info">
                    <Switch>
                        <Route exact={true} path="/info/about">
                            <InfoNavBar page={"about"}/>
                            <AboutPage/>
                        </Route>
                        {/*<Route path="/info/projects/:projectName">*/}
                        {/*    <ProjectPage/>*/}
                        {/*</Route>*/}
                        <Route path="/info/projects">
                            <InfoNavBar page={"projects"}/>
                            <Switch>
                                <Route exact={true} path="/info/projects/a-z">
                                    <ProjectsAZPage/>
                                </Route>
                                <Route exact={true} path="/info/projects/recommend">
                                    <RecommendProjectsPage/>
                                </Route>
                                <Route path="*">
                                    <Redirect to="/info/projects/a-z"/>
                                </Route>
                            </Switch>
                        </Route>
                        <Route exact={true} path="/info/resources">
                            <InfoNavBar page={"resources"}/>
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
