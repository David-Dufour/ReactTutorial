import { Router } from 'react-router';
import MainPage from './MainPage'
import EditBookForm from '../forms/EditBookForm'

const Root = () => (
    <Router>
        <Switch>
            <Router path="/book/list" component={EditBookForm} />
            <Router path="/book/:id" component={MainPage} />
        </Switch>
    </Router>
);
