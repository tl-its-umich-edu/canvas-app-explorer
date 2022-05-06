import React, { useEffect, useState } from "react";
import { Grid, Typography, makeStyles } from '@material-ui/core';

import Header from "./Header";
import ToolCard from "./ToolCard";
import "../css/Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2)
  },
  container: {
    margin: theme.spacing(3)
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(3)
  },
  footer: {
    textAlign: 'center'
  }
}))

function Home(props) {
  const classes = useStyles()

  //const [addedTools, setAddedTools] = useState([]); // each tool has one entry in array, for add/remove
  const [APIData, setAPIData] = useState(null); // holds the data read from API
  const [tools, setTools] = useState(null); // to display the tools

  // For search filter
  const [searchFilter, setSearchFilter] = useState("");

  // Only called once, since [] means no dependencies 
  useEffect(async () => {
    const url = "/api/lti_tools/";
    const response = await fetch(url);
    const data = await response.json();
      // sort data alphabetically by name
    data.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0))

    setAPIData(data) // for use with search filter
    setTools(data) // what will be displayed
    //setAddedTools(Array(Object.keys(data).length + 2).fill(false)) // don't need for add/remove
  }, []);

  // Called every time searchFilter changes, makes sure action is performed after state changes
  useEffect(() => {
    console.log(searchFilter)
    // Show filtered data if search is entered, else show all data
    if (searchFilter == "") {
      console.log("WE SHOULD GO IN HERE, show all data")
      setTools(APIData)
    }
    else {
      console.log("FILTERING DATA");
      const filteredData = APIData.filter((item) => (item.name.toLowerCase().includes(searchFilter.toLowerCase()) || item.short_description.toLowerCase().includes(searchFilter.toLowerCase())))
      setTools(filteredData)
      console.log(filteredData)
    }
  }, [searchFilter])

  // -----------------------ADD/REMOVE BUTTON FUNCTIONALITY CODE---------------------------
  // const addRemoveBlock = (
  // addRemoveSlot={(
  //     <div>
  //         {addedTools[tool.id] === false ?
  //             <AddRemoveButton
  //                 onClick={(e) => {
  //                     console.log(HELLOOO)
  //                     e.preventDefault();
  //                     let addedToolsCopy = [...addedTools]
  //                     addedToolsCopy[tool.id] = !addedToolsCopy[tool.id]
  //                     setAddedTools(addedToolsCopy)
  //                 }}
  //             />
  //         :
  //             <AddRemoveButton
  //                 onClick={(e) => {
  //                     console.log(YOOOOOOOOO)
  //                     e.preventDefault();
  //                     let addedToolsCopy = [...addedTools]
  //                     addedToolsCopy[tool.id] = !addedToolsCopy[tool.id]
  //                     setAddedTools(addedToolsCopy)
  //                 }}
  //                 removeToolFromSite={true}
  //             />
  //         }
  //     </div>
  // )}
  // )

  const toolCardContainer = tools === null
    ? <div>Loading . . . </div>
    : (
      <Grid container spacing={2} justifyContent='center'>
        {tools.map(tool => <Grid item key={tool.id}><ToolCard tool={tool} /></Grid>)}
      </Grid>
    )

  return (
    <div className={classes.root}>
      <Header onFilterChange={(v) => setSearchFilter(v)}/>
      <div className={classes.container}>
        <Typography variant='h5' component='h2' className={classes.subtitle}>
          Find the best tools for your class and students
        </Typography>
        {toolCardContainer}
      </div>
      <footer className={classes.footer}>
        <Typography>
          Copyright © 2022 The Regents of the University of Michigan
        </Typography>
      </footer>
    </div>
  );
}

export default Home;
