import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './App.css';

// list of items
const list1 = [
  { name: 'A1' },
  { name: 'A2' },
  { name: 'A3' },
  { name: 'A4' },
  { name: 'A5' },
  { name: 'A6' },
  { name: 'A7' },
  { name: 'A8' },
  { name: 'A9' }
];

const list2 = [
  { name: 'B1' },
  { name: 'B2' },
  { name: 'B3' },
  { name: 'B4' },
  { name: 'B5' },
  { name: 'B6' },
  { name: 'B7' },
  { name: 'B8' },
  { name: 'B9' }
];

// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected1 = 'item1';
const selected2 = 'item2';

class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems1 = Menu(list1, selected1);
    this.menuItems2 = Menu(list2, selected2);
  }

  state = {
    selected1,
    selected2
  };

  onSelect1 = key => {
    this.setState({ selected1: key });
    console.log(key + this.state.selected2)
  }

  onSelect2 = key => {
    this.setState({ selected2: key });
    console.log(this.state.selected1 + key)
  }


  render() {
    const { selected1, selected2 } = this.state;
    // Create menu from items
    const menu1 = this.menuItems1;
    const menu2 = this.menuItems2;

    return (
      <div className="App">
        <ScrollMenu
          data={menu1}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected1}
          onSelect={this.onSelect1}
        />
        <ScrollMenu
          data={menu2}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected2}
          onSelect={this.onSelect2}
        />
      </div>
    );
  }
}

export default App;
