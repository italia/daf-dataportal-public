import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
var _ = require("lodash");
import { Paper, withStyles } from "material-ui";
import MenuIcon from "material-ui-icons/Menu";

import L from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "../DafOpenMap.css";
import "leaflet/dist/leaflet.css";

const styles = theme => ({
  container_map: theme.mixins.gutters({
    width: "100%",
    height: 400,
    overflow: "hidden"
  })
});

function aggsGeoPoints(dataset, lat, lng) {
  var groupedpoints = _.groupBy(dataset, function(record) {
    let geoLat = _.get(record, lat);
    let geoLng = _.get(record, lng);
    return geoLat + "," + geoLng;
  });
  return _.values(groupedpoints);
}

function getGeoPoints(dataset, lat, lng) {
  let geoPoints = [];
  aggsGeoPoints(dataset, lat, lng).map(record => {
    let geoLat = _.get(record[0], lat);
    let geoLng = _.get(record[0], lng);
    if (geoLat && geoLng) {
      geoPoints.push([geoLat, geoLng]);
    }
  });
  return geoPoints;
}

function DafMarkerPopup(props) {
  const { record } = props;
  return (
    <Popup>
      <div>
        <div>{record[0]["enteBeneficiario"]["denominazioneBeneficiario"]}</div>
        <div>{record.length} Pagamenti effettuati</div>
      </div>
    </Popup>
  );
}

function DafMarker(props) {
  const { dataset, lat, lng } = props;

  return aggsGeoPoints(dataset, lat, lng).map(record => {
    let geoLat = _.get(record[0], lat);
    let geoLng = _.get(record[0], lng);
    let position = [geoLat, geoLng];
    if (geoLat && geoLng) {
      return (
        <Marker
          key={position.toString()}
          position={position}
          icon={new L.Icon({ iconUrl: "marker-icon.png" })}
        >
          <DafMarkerPopup record={record} />
        </Marker>
      );
    } else {
      return null;
    }
  });
}

class DafOpenMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataset: [],
      bounds: null
    };
  }

  componentDidMount() {
    const { url, lat, lng } = this.props;
    axios.get(url).then(res => {
      const dataset = res.data;
      const bounds = new L.latLngBounds(getGeoPoints(dataset, lat, lng));
      this.setState({ dataset, bounds });
    });
  }
  render() {
    const { classes, lat, lng } = this.props;
    const { dataset, bounds } = this.state;

    return (
      <div>
        {bounds && (
          <Paper className={classes.container_map} elevation={1}>
            <Map bounds={bounds}>
              <TileLayer
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              />
              <DafMarker dataset={dataset} lat={lat} lng={lng} />
            </Map>
          </Paper>
        )}
      </div>
    );
  }
}

DafOpenMap.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DafOpenMap);
