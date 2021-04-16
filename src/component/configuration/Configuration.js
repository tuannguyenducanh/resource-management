import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Container } from "@material-ui/core";
import SampleColor from "./samplecolor/SampleColor";
import TextileColor from "./textilecolor/TextileColor";
import SampleType from "./sampletype/SampleType";
import TextileType from "./textiletype/TextileType";
import SamplePricing from "./samplepricing/SamplePricing";
import TextilePricing from "./textilepricing/TextilePricing";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Container>{children}</Container>}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 700,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Configuration() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Màu mẫu" {...a11yProps(0)} />
        <Tab label="Màu vải" {...a11yProps(1)} />
        <Tab label="Mẫu đồ" {...a11yProps(2)} />
        <Tab label="Mẫu vải" {...a11yProps(3)} />
        <Tab label="Bảng giá bán" {...a11yProps(4)} />
        <Tab label="Bảng nhập vải" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SampleColor />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TextileColor />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SampleType />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TextileType />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SamplePricing />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <TextilePricing />
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
