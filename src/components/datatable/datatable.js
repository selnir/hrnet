import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./filtercomponent";

const Table = props => {
  const columns = [
    {
        name: "First Name",
        selector: "firstName",
        sortable: true,
      },
      {
        name: "Last Name",
        selector: "lastName",
        sortable: true,
        hide: "sm"
      },
      {
        name: "Start Date",
        selector: "startDate",
        sortable: true
      },
      {
        name: "Department",
        selector: "department",
        sortable: true,
        hide: "md"
      },
      {
        name: "Date of Birth",
        selector: "dateOfBirth",
        sortable: true,
        hide: "md"
      },

      {
        name: "Street",
        selector: "street",
        sortable: true,
        hide: "md"
      },
      {
        name: "City",
        selector: "city",
        sortable: true,
        hide: "md"
      },
      {
        name: "State",
        selector: "state",
        sortable: true,
        hide: "md"
      },
      {
        name: "Zip Code",
        selector: "zipCode",
        sortable: true,
        hide: "md"
      },

   
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  let filteredItems=""

  if (props.data==null){
    
    filteredItems="";

} else{

    filteredItems = props.data.filter(
        item =>
          JSON.stringify(item)
            .toLowerCase()
            .indexOf(filterText.toLowerCase()) !== -1
      );

}

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title=""
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default Table;
