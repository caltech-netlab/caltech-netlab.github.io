import Controller from '@ember/controller';
import { get } from '@ember/object';
import { isNone, isPresent } from '@ember/utils';
import { bind } from '@ember/runloop';
import $ from 'jquery';

const DEFAULT_MILEAGE = {
  value: 1.6,
  time: "Aug 2018"
};
const DEFAULT_CO2 = {
  value: 540,
  time: "Aug 2018"
};

const MS_PER_DAY = 1000 * 3600 * 24;

function getTodayBegin() {
  let now = Date.now();

  return now - now % MS_PER_DAY;
}

function formatTime(time) {
  return new Date(time).toDateString().split(' ').slice(1).join(' ');
}

function getSeries(response) {
  let series = get(response, "results.0.series.0.values") || [];

  return series = series.filter(pt => isPresent(pt[1]));
}

export default Controller.extend({
  mileage: DEFAULT_MILEAGE,
  fetchMileage() {
    let start = getTodayBegin();
    let end = start + MS_PER_DAY - 1;

    $.get(`https://caltech.powerflex.com/api/datasources/proxy/5/query?db=powerlogic&q=SELECT%20last(%22value%22)%20%20%2F%201000000*3.125%20FROM%20%22TotalEnergy%22%20WHERE%20%22host%22%20%3D%20%27cit-ca-2-pm-1%27%20AND%20time%20%3E%20${start}ms%20and%20time%20%3C%20${end}ms%20GROUP%20BY%20time(15m)&epoch=ms`).then(bind(this, response => {
      let series = getSeries(response);

      // This check ensures series !== []
      if (isNone(series)) {
        return;
      }

      let last = series[series.length - 1];

      this.set("mileage", {
        value: (last[1] / 1000).toFixed(2),
        time: formatTime(last[0])
      });
    }));
  },

  CO2: DEFAULT_CO2,
  fetchCO2() {
    let start = getTodayBegin();
    let end = start + MS_PER_DAY - 1;

    $.get(`https://caltech.powerflexsystems.com/api/datasources/proxy/5/query?db=powerlogic&q=SELECT%20last(%22value%22)%20*3.125%2F1000000*0.334%20FROM%20%22TotalEnergy%22%20WHERE%20%22host%22%20%3D%20%27cit-ca-2-pm-1%27%20AND%20time%20%3E%20${start}ms%20and%20time%20%3C%20${end}ms%20GROUP%20BY%20time(15m)%20fill(null)&epoch=ms`).then(bind(this, response => {
      let series = getSeries(response);

      // This check ensures series !== []
      if (isNone(series)) {
        return;
      }

      let last = series[series.length - 1];

      this.set("CO2", {
        value: last[1].toFixed(2),
        time: formatTime(last[0])
      });
    }));
  }
});
