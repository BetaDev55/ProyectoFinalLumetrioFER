// eslint-disable-next-line no-undef, no-unused-vars
class Bienvenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //latter things
    };
  }
  render() {
    return (
      <>
        <p>Dime tu {this.props.dato}!</p>
        <input type="text" placeholder={this.props.dato}></input>
      </>
    );
  }
}
