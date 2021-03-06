import './index.scss';
import React, {Component} from 'react';
import {Button, Coolpanel} from 'components';
import Code from '../code';
import className from 'classnames';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            contentStatus: ''
        };
    }

    onOpen () {
        this.setState({
            contentStatus: 'in'
        });
    }

    beforeClose (done) {
        this.setState({
            contentStatus: 'out'
        });

        setTimeout(() => {
            done();
        }, 400);
    }

    render () {
        // 这部分动画实现可以自定义
        const contentClassName = className({
            'cool-content': true,
            [`cool-content--${this.state.contentStatus}`]: true
        });
        return (
            <div className="demo demo--coolpanel">
                <h1 className="demo-title">Coolpanel</h1>
                <div className="demo-description">
                    <p>一个很cool的面板交互方式<br/>
                        用pos 与 窗体四个坐标算最适合的canvas圆半径；
                        <br />
                        Math.pow 实现Canvas画圆的easeIn、easeOut动画效果<br />会根据窗口的变化，重新计算pos位置（根据e.client、e.target.offset等信息计算）</p>
                    <Button className="open-target" size="large">打开一个很酷的面板</Button>
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            点一下右边的按钮试一下----->  对，就在右上角
                            <Coolpanel fillColor="255, 231, 11"
                                       beforeClose={this.beforeClose.bind(this)}
                                       targetName="open-target"
                                       onOpen={this.onOpen.bind(this)}>
                                <div className={contentClassName}>
                                    <div>我是标题--01</div>
                                    <div>我是标题--02</div>
                                    <div>我是标题--03</div>
                                    <div>我是标题--04</div>
                                    <div>我是标题--05</div>
                                </div>
                            </Coolpanel>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">代码展示</h2>
                    <div className="panel-content">
                        <Code>
{`// 按钮，className 与 面板的targetName属性一致即可
<Button className="open-target" size="large">打开一个很酷的面板</Button>
// 面板
<Coolpanel fillColor="255, 231, 11"
           beforeClose={this.beforeClose.bind(this)}
           targetName="open-target"
           onOpen={this.onOpen.bind(this)}>
    <div>
        <div>我是标题--01</div>
        <div>我是标题--02</div>
        <div>我是标题--03</div>
        <div>我是标题--04</div>
        <div>我是标题--05</div>
    </div>
</Coolpanel>`}
                        </Code>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">属性</h2>
                    <div className="panel-content">

                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
