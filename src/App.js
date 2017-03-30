/**
 * Created by yongyuehuang on 2017/3/29.
 */
import React from 'react';
import styles from './app.css';

import Button from './components/Button'

const App = () => (
    <div className={styles.app}>
        <h2>一个简单的react-webpack计数器....</h2>
        <Button />
    </div>
);

export default App;