import React from 'react';

let Contexted = React.createContext();

//connect function

export const connect = (mapStateToProps = () => ({}), mapDispatchToProps = () => ({})) => Component => {
  class Connected extends React.Component {
    static contextType = Contexted;
    onStoreOrPropsChange(props) {
      const {store} = this.context;
      const state = store.getState();
      const stateProps = mapStateToProps(state, props);
      const dispatchProps = mapDispatchToProps(store.dispatch, props);
      this.setState({
        ...stateProps,
        ...dispatchProps
      });
    }
    componentWillMount() {
      const {store} = this.context;
      this.onStoreOrPropsChange(this.props);
      this.unsubscribe = store.subscribe(() =>
        this.onStoreOrPropsChange(this.props)
      );
    }
    componentWillReceiveProps(nextProps) {
      this.onStoreOrPropsChange(nextProps);
    }
    componentWillUnmount() {
      this.unsubscribe();
    }
    render() {
      return <Component {...this.props} {...this.state}/>;
    }
  }

  return Connected;
};

// Provider component

export const Provider = props => {
  return (
    <Contexted.Provider value={props.value}>
      {props.children}
    </Contexted.Provider>)
}