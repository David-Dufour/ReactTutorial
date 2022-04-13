import { Router } from 'react-router';

const Root = () => (
    <Router>
        <Switch>
            <Router path="/book/list" component={EditBookForm} />
            <Router path="/book/:id" component={ListBooksForm} />
        </Switch>
    </Router>
);
