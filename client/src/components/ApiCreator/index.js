import './ApiCreator.less';
import React, { Component } from 'react';
import { Button, Layout } from 'antd';
import ApiCreatorForm from './ApiCreatorForm';

const { Header } = Layout;

class apiCreator extends Component {
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) return;
      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
      this.props.onCreate(values);
    });
  };
  saveFormRef = form => {
    this.form = form;
  };

  render() {
    return (
      <div className="m-api-creator">
        <Header style={{ background: '#fff' }}>
          <Button type="primary" onClick={this.showModal}>
            新建
          </Button>
        </Header>
        <ApiCreatorForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
export default apiCreator;
