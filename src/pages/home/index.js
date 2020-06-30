import React, { Component } from 'react';
import { Scene, Rect, Group, Label } from '@/utils/gentjs';
import './index.less';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    init() {
        const stage = document.getElementById('stage');
        const scene = new Scene({
            el: stage,
        });

        const rect1 = new Rect({
            left: 0,
            top: 0,
            width: 30,
            height: 30,
            fillColor: 'blue',
        });
        const label1 = new Label({
            text: '我是一段文本我是一段文本',
            fontSize:30
        });
        const group1 = new Group({
            left: 0,
            top: 0,
        });

        group1.append(rect1, label1);
        scene.append(group1);

        document.getElementsByTagName('canvas')[0].addEventListener('click', () => {
            group1.attr({
                left: 20,
                top: 20,
            });
        });
    }
    componentDidMount() {
        this.init();
    }
    render() {
        return (
            <>
                <div className="views" id="stage"></div>
            </>
        );
    }
}

export default Home;
