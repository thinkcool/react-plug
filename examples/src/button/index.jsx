import './index.scss';
import React, {Component} from 'react';
import Code from '../code';
import {Button, Icon} from 'components';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="demo demo--button">
                <h1 className="demo-title">Button按钮</h1>
                <div className="demo-description">
                    按钮组件的相关设置
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            <Button>按钮</Button>
                            <Button type="success">按钮</Button>
                            <Button type="normal">按钮</Button>
                        </div>

                        <div className="panel-line">
                            <Button><Icon type="add" />按钮</Button>
                            <Button loading>加载中</Button>
                            <Button disabled><Icon type="add" />禁用</Button>
                        </div>

                        <div className="panel-line">
                            <Button circle><Icon type="add" /></Button>
                        </div>
                        <div className="panel-line">
                            <Button transparent><Icon type="add" />透明</Button>
                            <Button transparent disabled><Icon type="add" />禁用透明</Button>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">代码展示</h2>
                    <div className="panel-content">
                        <Code>
                            {
`<Button type="success">按钮</Button>
<Button type="normal">按钮</Button>
<Button loading>加载中</Button>
<Button disabled><Icon type="add" />禁用</Button>`
                            }
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
