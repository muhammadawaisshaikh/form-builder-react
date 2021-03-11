import Create from '../components/Create';
import Edit from '../components/Edit';
import Validate from '../components/Validate';

export const routes = [
    {
        path: '/create',
        name: 'Create',
        component: <Create />,
        icon: ''
    },
    {
        path: '/edit',
        name: 'Edit',
        component: <Edit />,
        icon: ''
    },
    {
        path: '/validate',
        name: 'Validate',
        component: <Validate />,
        icon: ''
    }
];