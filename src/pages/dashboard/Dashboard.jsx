import React from "react";
import { Grid } from "@material-ui/core";
import "./Dashboard.scss";
import AddIcon from "@material-ui/icons/Add";
import ChainIcon from "../../assets/chain.png";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import TableOne from "../../components/tableOne/TableOne";
import TableTwo from "../../components/tableTwo/TableTwo";
const Dashboard = () => {
  return (
    <div className="homepage">
      <Grid container spacing={0}>
        <Grid xs={12} sm={4} md={4} lg={4}>
          <div className="create-program-section">
            <div className="addIcon">
              <AddIcon fontSize="large" />
            </div>
            <h3 className="create-program-text-program">
              Create Programmazione
            </h3>
          </div>
          <div className="clienti-section-mobile">
            <div className="chain-section-mobile">
              <div className="peopleIcon">
                <PeopleOutlineIcon />
              </div>
              <h3 className="create-program-text-mobile">Clienti</h3>
            </div>
            <h1 className="number-mobile">5</h1>{" "}
          </div>{" "}
        </Grid>
        <Grid xs={12} sm={4} md={4} lg={4}>
          {/* for laptop   */}
          <div className="programmazione-section">
            <div className="chain-section">
              <div className="chainIcon">
                <img src={ChainIcon} />
              </div>
              <h1 className="number">37</h1>{" "}
            </div>
            <h3 className="create-program-text">Programmazione</h3>
          </div>
          {/* for mobile */}
          <div className="programmazione-section-mobile">
            <div className="chain-section-mobile">
              <div className="chainIcon">
                <img src={ChainIcon} />
              </div>
              <h3 className="create-program-text-mobile">Programmazione</h3>
            </div>{" "}
            <h1 className="number-mobile">37</h1>{" "}
          </div>{" "}
        </Grid>{" "}
        <Grid xs={12} sm={4} md={4} lg={4}>
          {/* for laptop   */}
          <div className="clienti-section">
            <div className="chain-section">
              <div className="peopleIcon">
                <PeopleOutlineIcon />
              </div>
              <h1 className="number">5</h1>{" "}
            </div>
            <h3 className="create-program-text">Clienti</h3>
          </div>
          {/* for mobile */}
          <div className="create-program-section-mobile">
            <div className="addIcon">
              <AddIcon fontSize="large" />
            </div>
            <h3 className="create-program-text-program">
              Create Programmazione
            </h3>
          </div>{" "}
        </Grid>{" "}
      </Grid>{" "}
      <div className="tableSection">
        <TableOne />
        <TableTwo />{" "}
      </div>
    </div>
  );
};

export default Dashboard;
