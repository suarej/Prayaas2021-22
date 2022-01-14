import { HomePage } from ".";
import Iroute from "../../../typings/route.";
import { ContactUs } from "../ContactUs";
import { TopCoursesDetail } from "../CoursePage";
import { DAW } from "../DAW";
import { PreviousQuestions } from "../PYQ";
import { TestSeries } from "../TestSeries";
import { PareekshanOne } from "../TestSeries/Pareekshan1.0";
import { PareekshanTwo } from "../TestSeries/Pareekshan2.0";

const routes: Iroute[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        exact: true
    },
    {
        path: '/courses',
        name: 'Courses',
        component: TopCoursesDetail,
        exact: true
    },
    {
        path: '/PYQ',
        name: 'PYQ',
        component: PreviousQuestions,
        exact: true
    },
    {
        path: '/TestSeries',
        name: 'TestSeries',
        component: TestSeries,
        exact: true
    },
    {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs,
        exact: true
    },
    {
        path: '/DAW',
        name: 'DAW',
        component: DAW,
        exact: true
    },
    {
        path: '/Pareekshan1',
        name: 'Pareekshan1',
        component: PareekshanOne,
        exact: true
    },
    {
        path: '/Pareekshan2',
        name: 'Pareekshan2',
        component: PareekshanTwo,
        exact: true
    },
]

export default routes;