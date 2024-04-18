import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.homepage_container}>
      {/* <h2> Welcome to the HomePage</h2> */}
      <h2 className={classes.tour_heading}> Tours </h2>
      <table className="table">
        <tbody>
          {/* first row */}
          <tr>
            <th> July 16 </th>
            <th>DETROIT, MI</th>
            <th>DTE ENERGY MUSIC THEATRE</th>
            <th>
              <button className={classes.btn}> buy tickets </button>
            </th>
          </tr>

          {/* second row */}
          <tr>
            <th> July 19 </th>
            <th>TORONTO,ON</th>
            <th>BUDWEISER STAGE</th>
            <th>
              <button className={classes.btn}> buy tickets </button>
            </th>
          </tr>
          {/* third row */}
          <tr>
            <th> July 22 </th>
            <th>BRISTOW, VA</th>
            <th>JIGGY LUBE LIVE</th>
            <th>
              <button className={classes.btn}> buy tickets </button>
            </th>
          </tr>

          {/* fourth row */}
          <tr>
            <th> July 29 </th>
            <th>PHOENIX, AZ</th>
            <th>AK-CHIN PAVILION</th>
            <th>
              <button className={classes.btn}> buy tickets </button>
            </th>
          </tr>

          {/* fifth row */}
          <tr>
            <th> AUG 2 </th>
            <th>LAS VEGAS, NV</th>
            <th>T-MOBILE ARENA</th>
            <th>
              <button className={classes.btn}> buy tickets </button>
            </th>
          </tr>
          {/* sixth row */}
          <tr>
            <th> AUG 2 </th>
            <th>CONCORD, CA</th>
            <th>CONCORD PAVILION</th>
            <th>
              <button className={classes.btn}> buy tickets </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
