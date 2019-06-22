import React from 'react';
import logo from '../logo.svg';
import "../css/App.css"
import Confirm from './Confirm'

interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
  confirmVisible: boolean;
  countDown: number
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      confirmOpen: false,
      confirmMessage: "try click confirm button",
      confirmVisible: true,
      countDown: 10
    }
  }
  private timer: number = 0;
  private renderCount = 0;
  public getSnapshotBeforeUpdate(prevProps: {}, prevState:
    IState) {
    this.renderCount += 1;
    console.log("getSnapshotBeforeUpdate", prevProps, prevState,
      {
        renderCount: this.renderCount
      });
    return this.renderCount;
  }
  public shouldComponentUpdate(nextProps: {}, nextState: IState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }
  public componentDidUpdate(prevProps: {}, prevState: IState,
    snapshot: number) {
    console.log("componentDidUpdate", prevProps, prevState,
      snapshot, {
        renderCount: this.renderCount
      });
  }
  public static getDerivedStateFromProps(props: {}, state: IState) {
    console.log("getDerivedStateFromProps", props, state);
    return null;
  }
  public componentDidMount() {
    this.timer = window.setInterval(() => this.handleTimerTick(),
      1000);
  }
  private handleTimerTick() {
    this.setState(
      {
        confirmMessage: `Please hit the confirm button ${
          this.state.countDown
          } secs to go`,
        countDown: this.state.countDown - 1
      },
      () => {
        if (this.state.countDown <= 0) {
          clearInterval(this.timer);
          this.setState({
            confirmMessage: "Too late to confirm!",
            confirmVisible: false
          });
        }
      }
    );
  }

  private handleCancelClick = () => {
    console.log("props from app.tsx cancel")
    this.setState({ confirmOpen: false, confirmMessage: 'now canceled' });
    clearInterval(this.timer);
  }
  private handleOkClick = () => {
    console.log("props from app.tsx ok")
    this.setState({ confirmOpen: false, confirmMessage: "go on reading" });
    clearInterval(this.timer);
  }
  private handleConfirmClick = () => {
    this.setState({ confirmOpen: true, confirmMessage: "take a break" });
    clearInterval(this.timer);
  }
  public componentWillUnmount() {
    clearInterval(this.timer);
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
      </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React and TypeScript
      </a>
        </header>
        <p>{this.state.confirmMessage}</p>
        {this.state.confirmVisible && (
          <button onClick={this.handleConfirmClick}>Confirm</button>
        )}

        <Confirm
          open={this.state.confirmOpen}
          title="React And TypeScript"
          content="helo world" okCaption="Okay"
          cancelCaption="Cancel"
          onCancelClick={this.handleCancelClick}
          onOkClick={this.handleOkClick}
        ></Confirm>
      </div>)
  }


}

export default App;
