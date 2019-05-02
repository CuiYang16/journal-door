import { publishingAreaOptions, languageOptions,cycleList,formatOptions,levelList } from "~/plugins/common.json";

export function dateFormat(value,type) {
  if (value != null) {
    var date = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + "-";
    var M =
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) + "-";
    var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
    var h = date.getHours() + ":";
    var m = date.getMinutes() + ":";
    var s = date.getSeconds();
    if(type=='all'){
      return Y + M + D +h+m+s;
    }
    return Y + M + D;
  } else {
    return "--";
  }
}
export function levelFormat(value) {
  let label;
  for (var l of levelList) {
    if (value == l.value) {
      label = l.label;
      break;
    }
  }
  return label;
}
export function formatFormat(value) {
  let label;
  for (var l of formatOptions) {
    if (value == l.value) {
      label = l.label;
      break;
    }
  }
  return label;
}
export function cycleFormat(value) {
  let label;
  for (var l of cycleList) {
    if (value == l.value) {
      label = l.label;
      break;
    }
  }
  return label;
}
export function languageFormat(value) {
  let label;
  for (var l of languageOptions) {
    if (value == l.value) {
      label = l.label;
      break;
    }
  }
  return label;
}
export function areaFormat(value) {
  let label;
  for (var l of publishingAreaOptions) {
    if (value == l.value) {
      label = l.label;
      break;
    }
  }
  return label;
}
