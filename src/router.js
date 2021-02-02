import React, {useEffect} from "react"
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    useParams,
    useLocation,
} from "react-router-dom"
import WelcomePage from "./pages/welcome/welcome"
import InfoNavBar from "./pages/info/navbar/navbar"
import AboutPage from "./pages/info/about/about"
import ResourcesPage from "./pages/info/resources/ResourcesPage"
import ProjectsAZPage from "./pages/info/projects/az/ProjectsAZPage"
import FeaturedProjectsPage from "./pages/info/projects/recommend/FeaturedProjectsPage"
import ProjectPage from "./pages/info/project/ProjectPage"
import {getProject} from "./pages/info/projectsData"
import Footer from './components/Footer'

function ProjectPageRedirect() {
    let {projectName} = useParams()
    const project = getProject(projectName)
    if (project) {
        return <ProjectPage project={project}/>
    } else {
        return <Redirect to="/info/projects/a-z"/>
    }
}

function ProjectListRedirect() {
    let {searchText} = useParams()
    if (searchText) {
        return <ProjectsAZPage searchText={searchText}/>
    } else {
        return <ProjectsAZPage searchText={""}/>
    }
}

function ScrollToTop() {
    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/">
                    <ScrollToTop/>
                    <WelcomePage/>
                </Route>
                <Route path="/info">
                    <Switch>
                        <Route exact={true} path="/info/about">
                            <ScrollToTop/>
                            <InfoNavBar key={"nav"} page={"about"}/>
                            <AboutPage/>
                            <Footer/>
                        </Route>
                        <Route path="/info/project/:projectName">
                            <ScrollToTop/>
                            <ProjectPageRedirect/>
                            <Footer/>
                        </Route>
                        <Route path="/info/projects">
                            <InfoNavBar key={"nav"} page={"projects"}/>
                            <Switch>
                                <Route exact={true} path="/info/projects/a-z">
                                    <ProjectListRedirect/>
                                </Route>
                                <Route path="/info/projects/search/:searchText">
                                    <ProjectListRedirect/>
                                </Route>
                                <Route exact={true} path="/info/projects/featured">
                                    <FeaturedProjectsPage/>
                                </Route>
                                <Route path="*">
                                    <Redirect to="/info/projects/a-z"/>
                                </Route>
                            </Switch>
                            <Footer/>
                        </Route>
                        <Route exact={true} path="/info/resources">
                            <ScrollToTop/>
                            <InfoNavBar key={"nav"} page={"resources"}/>
                            <ResourcesPage/>
                            <Footer/>
                        </Route>
                        <Route path="*">
                            <ScrollToTop/>
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
