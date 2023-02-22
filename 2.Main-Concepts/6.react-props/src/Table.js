import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const { charactersData } = props;

  const row = charactersData.map((character, index) => {
    return (
      <tr key={index}>
        <td>{character.name}</td>
        <td>{character.age}</td>
      </tr>
    );
  });

  return <tbody>{row}</tbody>;
};

class Table extends React.Component {
  render() {
    const { charactersData } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody charactersData={charactersData} />
      </table>
    );
  }
}

export default Table;
