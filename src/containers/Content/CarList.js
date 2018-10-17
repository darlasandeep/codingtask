import React from "react";
import { Card, Select, Button } from "antd";

const { Option } = Select;

const CarList = props => {
  return (
    <Card
      title={
        <Button onClick={props.onSortToggle} type="primary" icon="swap">
          Sort
        </Button>
      }
      extra={
        <Select
          value={props.filterValue}
          placeholder="Filter by car type"
          style={{ width: 170 }}
          onChange={props.onFilterValueChange}
        >
          <Option value="all">all</Option>
          <Option value="sedan">sedan</Option>
          <Option value="hatchback">hatchback</Option>
          <Option value="suv">suv</Option>
        </Select>
      }
    >
      <ol>
        {props.carListSort.map(car => {
          return <li key={car.name}>{car.name}</li>;
        })}
      </ol>
    </Card>
  );
};

export default CarList;
