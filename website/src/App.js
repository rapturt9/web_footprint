import logo from "./logo.svg";
import "./App.css";
import { Grid, Reveal, Segment, Divider } from "semantic-ui-react";
import data from "./media/icons8-data-96.png";
import electricity from "./media/icons8-electricity-100.png";
import co2 from "./media/icons8-co2-100.png";
import cube from "./media/icons8-cube-100.png";

function App() {
  return (
    <Segment style={{ margin: "2%" }}>
      <center>
        <h1>Web Footprint</h1>
        <p>A simple way to measure your carbon footprint on the web</p>
        <Divider />
        <h2>Why?</h2>
      </center>
      <p style={{ marginTop: "1em" }}>
        According to{" "}
        <a target="_blank" href="https://www.sciencedirect.com/science/article/pii/S2214629618301051">
          this study
        </a>
        , it is estimated that powering digital devices (computers and
        smartphones) and the supporting infrastructures (communication networks
        and data centres) consumed about 5% of global electricity use in 2012
      </p>
      <p>
        And since then, internet use and the corresponding carbon footprint have
        been increasing. Most of this electricity isn't produced from clean
        energy, so there is a large environmental impact.
      </p>
      <p>
        So, the chrome extension I made lets you estimate the carbon footprint
        of your electricity usage. I did it by measuring the megabytes
        transferred over the network using chrome devtools, and using come
        conversions to find an estimated carbon footprint. Hopefully, it will make you more mindfull of your web surfing!
      </p>
      <Divider />
      <center>
        <h2>What are the conversions?</h2>
        <p>Click or hover over the images to see!</p>
      <Grid columns='equal' style={{marginTop:"1em"}}>
    <Grid.Column>
      <div style={{ height: "100px", width: "100px" }}>
        <Reveal animated="move up">
          <Reveal.Content visible>
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "white",
              }}
            >
              <img src={data} />
            </div>
          </Reveal.Content>
          <Reveal.Content hidden>
            <div>
              <h5>1073741824 bytes = 1 GB</h5>
              <a target="_blank" href="https://convertlive.com/u/convert/gigabytes/to/bytes">
                source
              </a>
            </div>
          </Reveal.Content>
        </Reveal>
        </div>
        </Grid.Column>

        <Grid.Column>
        <div style={{ height: "100px", width: "100px" }}>
        <Reveal animated="move up">
          <Reveal.Content visible>
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "white",
              }}
            >
              <img src={electricity} />
            </div>
          </Reveal.Content>
          <Reveal.Content hidden>
            <div>
              <h5>1.8 kilowatt hours = 1 GB</h5>
              <a target="_blank" href="https://www.websitecarbon.com/how-does-it-work/">
                source
              </a>
            </div>
          </Reveal.Content>
        </Reveal>
        </div>
        </Grid.Column>

        <Grid.Column>
        <div style={{ height: "100px", width: "100px" }}>
        <Reveal animated="move up">
          <Reveal.Content visible>
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "white",
              }}
            >
              <img src={co2} />
            </div>
          </Reveal.Content>
          <Reveal.Content hidden>
            <div>
              <h5>0.92 pounds CO2 = 1 kilowatt hour</h5>
              <a target="_blank" href="https://www.eia.gov/tools/faqs/faq.php?id=74&t=11#:~:text=In%202019%2C%20total%20U.S.%20electricity,of%20CO2%20emissions%20per%20kWh.">
                source
              </a>
            </div>
          </Reveal.Content>
        </Reveal>
        </div>
        </Grid.Column>

        <Grid.Column>
        <div style={{ height: "100px", width: "100px" }}>
        <Reveal animated="move up">
          <Reveal.Content visible>
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "white",
              }}
            >
              <img src={cube} />
            </div>
          </Reveal.Content>
          <Reveal.Content hidden>
            <div>
              <h5>2400 pounds of glacial ice = 1 pound CO2</h5>
              <a target="_blank" href="https://kencaldeira.wordpress.com/2018/03/24/how-much-ice-is-melted-by-each-carbon-dioxide-emission/">
                source
              </a>
            </div>
          </Reveal.Content>
        </Reveal>
      </div>
      </Grid.Column>
      </Grid>
      <Divider/>
      <a href="https://chrome.google.com/webstore/detail/web-footprint/dimpnnnfelinjcklppppoggihlibphce?hl=en">Get the chrome extension today!</a>
      </center>
    </Segment>
  );
}

export default App;
