// import React from "react";
// import ReactDOM from "react-dom";
// import { Route, Link, BrowserRouter } from "react-router-dom";
// import Home from "./component/cashflowSummary/CashflowSummary";
// import TodoList from "./component/todos/TodoList";
// import Product from "./component/product/Product";
// import Material from "./component/material/Material";

// const App = () => (
//   <BrowserRouter>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Tổng kết tháng</Link>
//         </li>
//         <li>
//           <Link to="/nhap">Nhập</Link>
//         </li>
//         <li>
//           <Link to="/sanpham">Sản phẩm</Link>
//         </li>
//         <li>
//           <Link to="/nguyenlieu">Định mức nguyên liệu</Link>
//         </li>
//       </ul>
//       <Route exact path="/" component={Home} />
//       <Route path="/nhap" component={TodoList} />
//       <Route path="/sanpham" component={Product} />
//       <Route path="/nguyenlieu" component={Material} />
//     </div>
//   </BrowserRouter>
// );

// export default App;

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Home from "./component/cashflowSummary/CashflowSummary";
import TodoList from "./component/todos/TodoList";
import Product from "./component/product/Product";
import Material from "./component/material/Material";
import Configuration from "./component/configuration/Configuration";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={5}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Tổng kết" {...a11yProps(0)} />
          <Tab label="Nhập" {...a11yProps(1)} />
          <Tab label="Sản phẩm" {...a11yProps(2)} />
          <Tab label="Đinh mức" {...a11yProps(3)} />
          <Tab label="Cài đặt" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TodoList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Product />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Material />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Configuration />
      </TabPanel>
    </div>
  );
}
