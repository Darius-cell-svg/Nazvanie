import './assets/style.css';
import { Card } from './components';
import { jsCoreGuideData } from './shared/docks';

export const App = () => {
    return (
        <div className="">
            <h1>Hello World</h1>
            <Card data={jsCoreGuideData[0]} />
        </div>
    );
};
